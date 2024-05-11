import * as core from '@actions/core';

export enum Inputs {
    BotToken = 'token',
    To = 'to',
    Message = 'message'
}

export interface ActionInputs {
    botToken: string;
    to: string;
    message: string;
}

export function getInputs(): ActionInputs {
    const result = {} as ActionInputs;

    result.botToken = core.getInput(Inputs.BotToken, { required: true });
    result.to = core.getInput(Inputs.To, { required: true });

    result.message = core.getInput(Inputs.Message, { required: false });

    return result;
}
