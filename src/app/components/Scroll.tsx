import { StickyScroll } from "@/app/components/ui/sticky-scroll-reveal";
import Image from "next/image";
const Scroll = () => {
    const content = [
        {
          title: "Collaborative Music Creation",
          description:
            "Create and produce music with your team in real time, no matter where you are. Collaborate effortlessly with bandmates, producers, and artists, sharing ideas and tracks seamlessly. Experience the joy of synchronized creativity as you work together to compose, arrange, and refine your music. Our platform empowers you to unlock new possibilities and turn your musical ideas into reality like never before.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              Collaborative Music Creation
            </div>
          ),
        },
        {
          title: "Real-Time Sound Changes",
          description:
            "Make instant adjustments to your tracks and hear changes in real time. Whether mixing beats, layering sounds, or fine-tuning audio, every modification is instantly reflected. Say goodbye to delays and embrace seamless creativity. With our platform, real-time sound editing keeps the music flowing, letting you experiment, innovate, and bring your compositions to life with unmatched speed and precision.",
          content: (
            <div className="h-full w-full flex items-center justify-center text-white">
              <Image
                src="/real_time_sound.webp"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="Real-time sound adjustments"
              />
            </div>
          ),
        },
        {
          title: "Version Control for Tracks",
          description:
            "Never lose track of your music's evolution. Manage every version of your tracks effortlessly with our version control. Revisit previous edits, compare changes, and restore earlier versions anytime. Collaborators stay in sync, ensuring a smooth workflow. Focus on creativity while we handle the history of your musical journey, making sure nothing gets lost in the process.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
              Version Control for Tracks
            </div>
          ),
        },
        {
          title: "Never Run Out of Inspiration",
          description:
            "Spark creativity with endless musical tools and resources. Discover new genres, experiment with unique sounds, and explore innovative techniques to elevate your compositions. Our platform keeps the inspiration flowing, helping you break creative blocks and push boundaries. Whether you’re creating for fun or professionally, stay motivated and inspired to craft your best music every day.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              Never Run Out of Inspiration
            </div>
          ),
        },
      ];
      
  return (
    <div className=" overflow-hidden">
    <StickyScroll  content={content}  />
  </div>
  )
}

export default Scroll