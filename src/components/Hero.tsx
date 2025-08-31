const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen max-w-4x1 mx-auto text-center space-y-6">
      <h1 className="text-5xl font-extrabold tracking-tight">
        Hello World <br /> I’m<br/>
        <span 
        className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-800 bg-clip-text text-transparent animate-gradient"
          style={{
    textShadow: "0 0 8px rgba(255,200,100,0.8), 0 0 16px rgba(255,100,50,0.6)",
    animation: "fireFlicker 8s infinite ease-in-out",
  }}
        >
          Julian
        </span>

        <style>
{`
  @keyframes fireFlicker {
    0%, 100% {
      text-shadow: 0 0 8px rgba(240, 167, 32, 0.8), 0 0 16px rgba(255, 64, 50, 0.6);
    }
    50% {
      text-shadow: 0 0 14px rgba(255, 181, 32, 0.9), 0 0 28px rgba(187, 71, 21, 0.7);
    }
  }
`}
</style>
      </h1>
      <p className="text-lg text-gray-400">
        I’m a software engineer with a passion for{" "}
        <span className="text-white">C++</span>,{" "}
        <span className="text-white">C#</span>, and building games + web
        experiences.
      </p>
      <div className="flex gap-4 justify-center">
        <a
          href="#projects"
          className="px-6 py-3 rounded-2x1 bg-purple-600 hover:bg-purple-700 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-2x1 border border-gray-700 hover:border-purple-500 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};
export default Hero;
