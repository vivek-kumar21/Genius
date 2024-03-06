"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Avinash",
    avatar: "A",
    title: "Software Engineer",
    description:
      "Incredible! From coding assistance to generating captivating visuals and music, this AI chat service is a developer's dream come true.",
  },
  {
    name: "Satyam",
    avatar: "S",
    title: "SDE",
    description:
      "As a developer, this tool streamlines my workflow. Code, images, music—it does it all! Highly recommended.",
  },
  {
    name: "Ankit",
    avatar: "A",
    title: "Analyst",
    description:
      "This AI service saves hours! Code, visuals, music—it's all there. My productivity has soared!",
  },
  {
    name: "Kishan",
    avatar: "K",
    title: "Developer",
    description:
      "This AI chat platform is a game-changer! From coding to music generation, it's like having a genius at your fingertips. Mind-blowing!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-4">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
