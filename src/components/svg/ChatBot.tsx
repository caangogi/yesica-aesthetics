"use client"

import React from 'react';
import styles from '@/styles/chat-bot.module.scss';
import { GoDependabot } from "react-icons/go";

export default function ChatBot() {

  return (
    <div 
      className={styles.chatbot_container}
      onClick={() => alert('Hola soy IA, el asistente de YsiK Aesthetics Clinic, Puedo ayudarte a reservar un cita. ')}  
    >
      <div className={styles.chatbot}>
          <GoDependabot />
      </div>
      <div className={styles.messageBubble}> <p className={styles.message}>Hola, Soy el AI, el asistente inteligente de YsiK Clinic.</p> </div>
    </div>
  );
}
