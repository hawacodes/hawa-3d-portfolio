import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";

export function Avatar(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("models/avatar.glb");

  const { animations: sittingAnimation } = useFBX("animations/Sitting.fbx");
  const { animations: standingAnimation } = useFBX("animations/Standing Greeting.fbx");

  sittingAnimation[0].name = "Sitting";
  standingAnimation[0].name = "Standing Greeting";

  const { actions } = useAnimations([sittingAnimation[0], standingAnimation[0]], group);

  const [animation, setAnimation] = useState("Sitting"); // Default animation
  const [position, setPosition] = useState([1.1, -2.0, -3.8]); // Default position

  useEffect(() => {
    // Detect if the user is on a mobile device
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const updateAvatarState = () => {
      if (mediaQuery.matches) {
        setAnimation("Standing Greeting"); // Mobile: Standing Greeting
        setPosition([0, -2.7, -1]); // Mobile position
      } else {
        setAnimation("Sitting"); // Desktop: Sitting
        setPosition([1.1, -2.0, -3.8]); // Desktop position
      }
    };

    // Initial check
    updateAvatarState();

    // Add event listener for screen size changes
    mediaQuery.addEventListener("change", updateAvatarState);

    return () => {
      mediaQuery.removeEventListener("change", updateAvatarState);
    };
  }, []);

  useEffect(() => {
    // Ensure the animation is triggered correctly
    if (actions[animation]) {
      actions[animation].reset().fadeIn(0.5).play();
    }

    return () => {
      if (actions[animation]) {
        actions[animation].fadeOut(0.5).stop();
      }
    };
  }, [animation, actions]);

  return (
    <group
      {...props}
      ref={group}
      dispose={null}
      position={position} // Dynamically updated position
      rotation={[-Math.PI / 2, 0.05, 1]}
      scale={[2, 2, 2]} // Scale the avatar up by 20%
    >
      <primitive object={nodes.Hips} />
      <skinnedMesh geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
      <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
      <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
    </group>
  );
}

useGLTF.preload("models/avatar.glb");