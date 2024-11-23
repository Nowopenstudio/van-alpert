"use client"
import { motion, AnimatePresence } from "framer-motion";

  export function TextOn({text, num}: {text?: string; num?: number;}) {

    let full:any = [];
    var newText = (text!).split('');
    for (var i in newText) {
        var curr:any = <AnimatePresence><motion.span key={`${text}-toolLetter-${i}`} initial={{ opacity: 0 }}  exit={{ opacity: 0 }} transition={{ease:'easeInOut',duration:0.2}} className="toolLetter" style={{animationDelay:`${ Number(i)*.015 + num!}s`}}>{newText[i]}</motion.span></AnimatePresence>;
        full.push(curr)
      }

      return (full)
  }