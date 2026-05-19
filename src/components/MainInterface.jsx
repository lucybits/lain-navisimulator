import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import './MainInterface.css';

export default function MainInterface() {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState(1);
  const navigate = useNavigate();

  const phaseOneMessages = useMemo(() => [
    "SYSTEM - NORMAL MODE",
    "EMULATOR VERSION  - 0.2 | TRIAL/DEMO |",
    "Copyright (c) TACHIBANA LABS 198X - 199X",
    "",
    "I/O - DEVICE-DRIVERS     - OK",
    "THREAD-ALLOCATOR         - OK",
    "SYSTEM-ANALYZER          - OK",
    "CPU-LINKER               - OK",
    "GARBAGE-COLLECTOR        - OK",
    "PROTOCOL-LAYER           - OK",
    "WIRED-INTERFACE          - OK",
    "NEURAL-SYNC              - OK",
    "( WARNING: Heap cleanup incomplete. *Manual override required. )",
    "",
    ">> system>SYSTEM CHECK",
    ">> system>CHECKING FOR SYSTEM UPDATES",
    ">> system>NEW MODULES DETECTED",
    ">> system>VERIFYING SIGNATURES",
    ">> system>LOADING I/O ROUTINES",
    ">> system>MAPPING MEMORY REGIONS",
    ">> system>ESTABLISHING SECURE LINK",
    ">> system>INITIALIZING CORE",
    ">> system>CORE INIT COMPLETE",
    ">> system>LOADING INTERFACE MODULES",
    ">> system>SCANNING NEURAL PROTOCOLS",
    ">> system>INITIALIZING WIRED CONNECTION",
    ">> system>CHECKING NAVI PROTOCOLS",
    ">> system>LOADING SCHUMANN RESONANCE",
    ">> system>LOADING COMPLETE",
    ">> system>========================",
    ">> system>INITIALIZATION COMPLETE",
    "",
    ">> ENTERING MAIN INTERFACE..."
  ], []);

  const phaseTwoMessages = [
    ">> INTERFACE ACTIVE",
    ">> LOADING USER PROFILE",
    ">> CONFIGURING WORKSPACE",
    ">> ESTABLISHING NETWORK CONNECTION",
    ">> INITIALIZING PROTOCOL LAYER 7",
    ">> CONNECTING TO WIRED NETWORK",
    ">> SYNCING WITH GLOBAL CONSCIOUSNESS",
    ">> SCANNING NEURAL PROTOCOLS",
    ">> MEMORY PARTITION ALLOCATED",
    ">> QUANTUM AUTHENTICATION COMPLETE",
    ">> INITIALIZING NAVI SYSTEM",
    ">> CONNECTING TO THE WIRED",
    ">> CHECKING PSYCHE PARAMETERS",
    ">> LOADING COLLECTIVE CONSCIOUSNESS",
    ">> VERIFYING NEURAL UPLINK",
    ">> SCANNING PARALLEL LAYERS",
    ">> READY FOR INPUT",
    ">> AWAITING COMMANDS..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (phase === 1) {
        if (currentIndex < phaseOneMessages.length) {
          setVisibleMessages((prev) => [...prev, phaseOneMessages[currentIndex]]);
          setCurrentIndex((prev) => prev + 1);
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setVisibleMessages([]);
            setCurrentIndex(0);
            setPhase(2);
          }, 2000);
        }
      } else if (phase === 2) {
        if (currentIndex < phaseTwoMessages.length) {
          setVisibleMessages((prev) => [...prev, phaseTwoMessages[currentIndex]]);
          setCurrentIndex((prev) => prev + 1);
        } else {
          clearInterval(interval);
          setTimeout(() => {
            navigate("/navi-showcase");
          }, 2000);
        }
      }
    }, 180);

    return () => clearInterval(interval);
  }, [currentIndex, phase, phaseOneMessages, phaseTwoMessages, navigate]);

  return (
    <div className="main-interface">
      {visibleMessages.map((msg, index) => (
        <div key={index}>{msg}</div>
      ))}
    </div>
  );
}
