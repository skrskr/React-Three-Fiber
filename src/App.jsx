import { Canvas } from "@react-three/fiber";
import Box from "./Box";

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Box position={[-0.75, 0, 0]} name="Box1" />
      <Box position={[0.75, 0, 0]} name="Box2" />
    </Canvas>
  );
}
