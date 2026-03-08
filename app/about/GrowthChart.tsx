"use client";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

interface TimelineItem {
  date: string;
  skill: string;
}

const GrowthChart = () => {
  const { t } = useTranslation();
  const rawTimeline = t("skillsTimeline", { returnObjects: true });
  const timeline: TimelineItem[] = Array.isArray(rawTimeline) ? rawTimeline : [];

  const startYear = 1981;
  const currentYear = new Date().getFullYear() + 1; // Extra year for arrow space
  const yearRange = currentYear - startYear;

  const width = 1000;
  const height = 470;
  const paddingX = 260; // Increased space for labels on the left
  const paddingY = 60;

  const points = useMemo(() => {
    return timeline.map((item, index) => {
      const date = new Date(item.date);
      const year = date.getFullYear() + date.getMonth() / 12;
      const x = paddingX + ((year - startYear) / yearRange) * (width - paddingX - 40);
      const y = height - paddingY - (index / (timeline.length - 1)) * (height - 2 * paddingY);
      return { x, y, ...item };
    });
  }, [timeline, yearRange]);

  const linePath = useMemo(() => {
    if (points.length < 2) return "";
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const curr = points[i];
      const next = points[i + 1];
      // Smoother Bezier curve
      const cp1x = curr.x + (next.x - curr.x) * 0.5;
      const cp1y = curr.y;
      const cp2x = curr.x + (next.x - curr.x) * 0.5;
      const cp2y = next.y;
      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
    }
    return path;
  }, [points]);

  if (timeline.length === 0) return null;

  return (
    <div className="w-full overflow-x-auto bg-[var(--bg-main)] p-6 rounded-2xl shadow-2xl border border-[var(--main-light-transparent)] mt-12 mb-12">
      <h3 className="text-center font-mono mb-8 text-4xl font-bold tracking-tight">{t("skills")} Development Journey</h3>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto min-w-[800px]">
        {/* Define Arrowheads */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="var(--text)" />
          </marker>
        </defs>

        {/* Axes */}
        <line
          x1={paddingX}
          y1={height - paddingY}
          x2={width - 20}
          y2={height - paddingY}
          stroke="var(--text)"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
        <line
          x1={paddingX}
          y1={height - paddingY}
          x2={paddingX}
          y2={20}
          stroke="var(--text)"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />

        {/* Axis Labels */}
        <text
          x={width - 40}
          y={height - paddingY - 15}
          textAnchor="end"
          className="fill-[var(--text)] text-sm font-bold"
        >
          {t("year", "Year")}
        </text>
        <text
          x={paddingX - 10}
          y={30}
          textAnchor="end"
          className="fill-[var(--text)] text-sm font-bold"
        >
          {t("skills", "Skills")}
        </text>

        {/* X Axis Years */}
        {[1981, 1990, 2000, 2010, 2020, 2026].map((year) => {
          const x = paddingX + ((year - startYear) / yearRange) * (width - paddingX - 40);
          return (
            <text
              key={year}
              x={x}
              y={height - paddingY + 20}
              textAnchor="middle"
              className="fill-[var(--text)] text-[10px] opacity-60"
            >
              {year}
            </text>
          );
        })}

        {/* Y Axis Skill Labels (Left) */}
        {points.map((pt, i) => (
          <text
            key={`label-${i}`}
            x={paddingX - 15}
            y={pt.y + 4}
            textAnchor="end"
            className="fill-[var(--text)] text-[10px] sm:text-xs opacity-80"
          >
            {pt.skill}
          </text>
        ))}

        {/* The Curve */}
        <motion.path
          d={linePath}
          fill="none"
          stroke="var(--main-light)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />

        {/* Temporal reference labels along the path (Optional: can add small year hints if needed, but per request removing dots) */}
      </svg>
    </div>
  );
};

export default GrowthChart;
