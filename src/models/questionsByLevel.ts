import { Level } from "./level";
import { Question } from "./question";

export interface QuestionByLevel {
  level: Level;
  questions: Question[];
}
