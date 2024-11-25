import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import planeScene from '../assets/3d/plane.glb';

const Plane = ({ isRotating, ...props }) => {
  // Load the GLTF file
  const { scene, animations } = useGLTF(planeScene);

  // Create a ref to manage the GLTF object
  const ref = useRef();

  // Use animations from the loaded GLTF
  const { actions } = useAnimations(animations, ref);

  // Use useEffect to handle the animation based on isRotating
  useEffect(() => {
    if (actions && actions["Take 001"]) {
      if (isRotating) {
        actions["Take 001"].play();
      } else {
        actions["Take 001"].stop();
      }
    } else {
      console.warn('Animation "Take 001" not found. Check the GLTF file.');
    }
  }, [actions, isRotating]);

  return (
    <mesh ref={ref} {...props}>
      {/* Render the GLTF scene */}
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
