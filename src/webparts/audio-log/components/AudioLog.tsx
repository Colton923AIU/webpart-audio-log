import * as React from "react";
import type { IAudioLogProps } from "./IAudioLogProps";
import styles from "./AudioLog.module.scss";
import AudioItem from "../../../components/AudioItem";

export type TAudioItem = {
  id: string;
  audioFile: Blob;
};

const AudioLog: React.FC<IAudioLogProps> = (props: IAudioLogProps) => {
  const TestItems: TAudioItem[] = [
    {
      id: "a34a",
      audioFile: new Blob(),
    },
    {
      id: "b34b",
      audioFile: new Blob(),
    },
    {
      id: "a34a",
      audioFile: new Blob(),
    },
    {
      id: "b34b",
      audioFile: new Blob(),
    },
    {
      id: "a34a",
      audioFile: new Blob(),
    },
    {
      id: "b34b",
      audioFile: new Blob(),
    },
    {
      id: "a34a",
      audioFile: new Blob(),
    },
    {
      id: "b34b",
      audioFile: new Blob(),
    },
    {
      id: "a34a",
      audioFile: new Blob(),
    },
    {
      id: "b34b",
      audioFile: new Blob(),
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <span>audio log</span>
      </div>
      <div className={`${styles.items} ${styles.scroll_y}`}>
        {TestItems.map((audioItem) => {
          return (
            <AudioItem audioFile={audioItem.audioFile} id={audioItem.id} />
          );
        })}
      </div>
    </section>
  );
};

export default AudioLog;
