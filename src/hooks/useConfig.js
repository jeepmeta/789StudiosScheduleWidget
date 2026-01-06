import { useState } from 'react';
import { scheduleSlots as baseSlots } from '../config/scheduleConfig.js';
import {
  lighterSettings as baseLighter,
  flameSettings as baseFlame,
  parallaxLayers as baseParallax,
  globalParallax as baseGlobalParallax,
} from '../config/visualConfig.js';

// Simple local state wrapper for now; later we’ll add localStorage/export.
export function useConfig() {
  const [scheduleSlots, setScheduleSlots] = useState(baseSlots);
  const [lighterSettings, setLighterSettings] = useState(baseLighter);
  const [flameSettings, setFlameSettings] = useState(baseFlame);
  const [parallaxLayers, setParallaxLayers] = useState(baseParallax);
  const [globalParallax, setGlobalParallax] = useState(baseGlobalParallax);

  return {
    scheduleSlots,
    setScheduleSlots,
    lighterSettings,
    setLighterSettings,
    flameSettings,
    setFlameSettings,
    parallaxLayers,
    setParallaxLayers,
    globalParallax,
    setGlobalParallax,
  };
}
