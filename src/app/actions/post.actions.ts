import { Action } from '@ngrx/store';
// import { createDecipher } from 'crypto';

export const EDIT_TEXT  = '[Post] Edit';
export const UPVOTE     = '[Post] Upvote';
export const DOWNVOTE   = '[Post] Downvote';
export const RESET      = '[Post] Reset';

/*
Every action will be managed within its own class. This makes it possible
to use a constructor to send data payload when a new action instance 
is created. Strong type the data that is sent with a given action's payload.
*/

export class EditText implements Action {
  readonly type = EDIT_TEXT;

  /// user a constructor to send a payload with the action
  constructor(public payload: string) {}
}


export class Upvote implements Action {
  readonly type = UPVOTE;
}

export class Downvote implements Action {
  readonly type = DOWNVOTE;
}

export class Reset implements Action {
  readonly type = RESET;
}

export type All
  = Upvote
  | Downvote
  | Reset
  | EditText;
