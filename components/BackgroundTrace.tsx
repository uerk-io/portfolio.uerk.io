import { motion, MotionStyle } from "framer-motion";


type Props = {

}

const circle_style: MotionStyle = {
  strokeWidth: 5, strokeLinecap: "round", fill: "transparent"
}

const triangle_style: MotionStyle = {
  strokeWidth: 3, strokeLinecap: "round", stroke: "gray"
}

{/* Attributes to Describe Drawing the Path of the Circle Highlight Elements */ }
const drawCircle = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: any) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

{/* Attributes to Describe Drawing the Path of the Triangle Highlight Elements */ }
const drawTriangle = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: any) => {
    const delay = i * 0.25;
    return {
      pathLength: [0, 1],
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.0, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    }
  }
}

function DrawHighlightCircles() {
  return (
    <>
      {/* Outer Top Left*/}
      <motion.circle
        cx="200"
        cy="340"
        r="150"
        stroke="#033A64"
        variants={drawCircle}
        custom={2}
        style={circle_style}
      />
      {/* Outer Above*/}
      <motion.circle
        cx="500"
        cy="180"
        r="150"
        stroke="#5F0020"
        variants={drawCircle}
        custom={3}
        style={circle_style}
      />

      {/* Outer Top Right*/}
      <motion.circle
        cx="800"
        cy="340"
        r="150"
        stroke="#03642A"
        variants={drawCircle}
        custom={4}
        style={circle_style}
      />

      {/* Outer Bottom Right*/}
      <motion.circle
        cx="800"
        cy="670"
        r="150"
        stroke="#033A64"
        variants={drawCircle}
        custom={5}
        style={circle_style}
      />

      {/* Outer Below */}
      <motion.circle
        cx="500"
        cy="820"
        r="150"
        stroke="#5F0020"
        variants={drawCircle}
        custom={6}
        style={circle_style}
      />

      {/* Outer Bottom Left*/}
      <motion.circle
        cx="200"
        cy="670"
        r="150"
        stroke="#03642A"
        variants={drawCircle}
        custom={7}
        style={circle_style}
      />

      {/* Profile Highlight */}
      <motion.circle
        cx="500"
        cy="500"
        r="150"
        stroke="#0FA17A"
        variants={drawCircle}
        custom={1}
        style={circle_style}
      />
    </>
  )
}

function DrawHighlightTriangles() {
  return (
    <>
      {/*Triangle Up */}

      {/* Bottom Line */}
      <motion.line
        x1="200"
        y1="670"
        x2="800"
        y2="670"
        variants={drawTriangle}
        custom={2}
        style={triangle_style}
      />

      {/* Bottom Right Up */}
      <motion.line
        x1="800"
        y1="670"
        x2="500"
        y2="180"
        variants={drawTriangle}
        custom={2}
        style={triangle_style}
      />

      {/* Top to Bottom Left */}
      <motion.line
        x1="500"
        y1="180"
        x2="200"
        y2="670"
        variants={drawTriangle}
        custom={2}
        style={triangle_style}
      />

      {/*Triangle Down */}

      {/* Top Line */}
      <motion.line
        x1="200"
        y1="340"
        x2="800"
        y2="340"
        variants={drawTriangle}
        custom={2}
        style={triangle_style}
      />

      {/* Top Right Down */}
      <motion.line
        x1="800"
        y1="340"
        x2="500"
        y2="820"
        variants={drawTriangle}
        custom={2}
        style={triangle_style}
      />

      {/* Top Left Down */}
      <motion.line
        x1="200"
        y1="340"
        x2="500"
        y2="820"
        variants={drawTriangle}
        custom={2}
        style={triangle_style}
      />
    </>
  )

}

function DrawHighlightLines(){
  
}

export default function BackgroundTrace({ }: Props) {
  return (
    <div
      className="absolute flex justify-center items-center">
      <motion.svg
        width="1000"
        height="1000"
        viewBox="0 0 1000 1000"
        initial="hidden"
        animate="visible"
        className="absolute"
      >


        {/* Call Highlight Circles to Render in Proper Place*/}
        <DrawHighlightCircles />
        <DrawHighlightTriangles/>
      </motion.svg>
    </div>
  );
}
