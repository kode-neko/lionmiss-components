import { Subject } from "rxjs";
import { LMNotificationProps } from "./types";

const subjectNotificationLM: Subject<LMNotificationProps> = new Subject();

function sendNotificationLM(notification: LMNotificationProps): void {
  subjectNotificationLM.next(notification);
}

export { subjectNotificationLM, sendNotificationLM };
