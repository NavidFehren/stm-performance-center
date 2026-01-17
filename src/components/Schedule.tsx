import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Filter } from "lucide-react";

const scheduleData = [
  { time: "06:00", mon: "Open Gym", tue: "S&C", wed: "Open Gym", thu: "S&C", fri: "Open Gym", sat: "Open Gym", sun: "-" },
  { time: "07:00", mon: "Boxing", tue: "MMA", wed: "Boxing", thu: "MMA", fri: "Boxing", sat: "BJJ (All)", sun: "-" },
  { time: "09:00", mon: "BJJ (Fundamentals)", tue: "Striking", wed: "BJJ (Fundamentals)", thu: "Striking", fri: "BJJ (Fundamentals)", sat: "Open Mat", sun: "Open Mat" },
  { time: "12:00", mon: "MMA", tue: "BJJ (Advanced)", wed: "MMA", thu: "BJJ (Advanced)", fri: "MMA", sat: "-", sun: "-" },
  { time: "17:00", mon: "Youth MMA", tue: "Youth MMA", wed: "Youth MMA", thu: "Youth MMA", fri: "-", sat: "-", sun: "-" },
  { time: "18:00", mon: "Muay Thai", tue: "BJJ (All)", wed: "Muay Thai", thu: "BJJ (All)", fri: "Muay Thai", sat: "-", sun: "-" },
  { time: "19:00", mon: "MMA", tue: "Striking", wed: "MMA", thu: "Wrestling", fri: "Open Sparring", sat: "-", sun: "-" },
  { time: "20:00", mon: "BJJ (Advanced)", tue: "S&C", wed: "BJJ (Advanced)", thu: "S&C", fri: "-", sat: "-", sun: "-" },
];

const classTypes = ["Alle", "MMA", "BJJ", "Striking", "Kraft", "Jugend"];
const days = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

const getClassColor = (className: string) => {
  if (className.includes("MMA")) return "bg-primary/20 text-primary border-primary/30";
  if (className.includes("BJJ") || className.includes("Mat")) return "bg-blue-500/20 text-blue-400 border-blue-500/30";
  if (className.includes("Striking") || className.includes("Boxing") || className.includes("Muay Thai")) return "bg-orange-500/20 text-orange-400 border-orange-500/30";
  if (className.includes("S&C") || className.includes("Gym")) return "bg-green-500/20 text-green-400 border-green-500/30";
  if (className.includes("Youth")) return "bg-purple-500/20 text-purple-400 border-purple-500/30";
  if (className.includes("Wrestling") || className.includes("Sparring")) return "bg-red-500/20 text-red-400 border-red-500/30";
  return "bg-muted text-muted-foreground";
};

const Schedule = () => {
  const [filter, setFilter] = useState("All");

  const filteredSchedule = scheduleData.map((row) => {
    if (filter === "All") return row;
    const filteredRow = { ...row };
    const dayKeys = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const;
    dayKeys.forEach((day) => {
      const className = row[day];
      const matches = 
        (filter === "MMA" && className.includes("MMA")) ||
        (filter === "BJJ" && (className.includes("BJJ") || className.includes("Mat"))) ||
        (filter === "Striking" && (className.includes("Striking") || className.includes("Boxing") || className.includes("Muay Thai"))) ||
        (filter === "S&C" && (className.includes("S&C") || className.includes("Gym"))) ||
        (filter === "Youth" && className.includes("Youth"));
      
      if (!matches && className !== "-") {
        filteredRow[day] = "-";
      }
    });
    return filteredRow;
  });

  return (
    <section id="schedule" className="section-padding bg-gradient-dark">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-display uppercase tracking-widest text-sm">Wöchentlicher Trainingsplan</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            TRAINIERE ZU <span className="gradient-text">DEINER ZEIT</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Mit zahlreichen Kursen pro Woche haben wir eine Trainingszeit, die zu deinem Zeitplan passt.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <Filter className="w-4 h-4 text-muted-foreground mr-2" />
          {classTypes.map((type) => {
            const filterValue = type === "Alle" ? "All" : type === "Kraft" ? "S&C" : type === "Jugend" ? "Youth" : type;
            return (
              <button
                key={type}
                onClick={() => setFilter(filterValue)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === filterValue
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>

        {/* Schedule Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-3 font-display font-semibold text-muted-foreground">Uhrzeit</th>
                {days.map((day) => (
                  <th key={day} className="text-center py-4 px-3 font-display font-semibold">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredSchedule.map((row, index) => (
                <tr key={index} className="border-b border-border/50 hover:bg-card/50 transition-colors">
                  <td className="py-4 px-3 font-semibold text-muted-foreground">{row.time}</td>
                  {["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map((day) => {
                    const className = row[day as keyof typeof row];
                    return (
                      <td key={day} className="text-center py-4 px-3">
                        {className !== "-" ? (
                          <span className={`inline-block px-3 py-1.5 rounded-lg text-xs font-medium border ${getClassColor(className as string)}`}>
                            {className}
                          </span>
                        ) : (
                          <span className="text-muted-foreground/30">—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend & Download */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-8 border-t border-border">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-primary/50" />
              <span className="text-sm text-muted-foreground">MMA</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-blue-500/50" />
              <span className="text-sm text-muted-foreground">BJJ</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-orange-500/50" />
              <span className="text-sm text-muted-foreground">Striking</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-green-500/50" />
              <span className="text-sm text-muted-foreground">Kraft/Offenes Training</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-purple-500/50" />
              <span className="text-sm text-muted-foreground">Jugend</span>
            </div>
          </div>
          <Button variant="outline" size="lg">
            <Download className="w-4 h-4 mr-2" />
            Trainingsplan herunterladen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
