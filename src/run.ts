import * as core from '@actions/core';
import { ActionInputs, getInputs } from './io-helper';
import fetch from 'node-fetch';

interface Body {
    parse_mode: string;
    chat_id: number | string;
    text: string;
}

export async function send(botToken: string, to: string, message: string) {
    const uri = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const headers = { 'Content-Type': 'application/json' };
    const body = {
        'parse_mode': 'Markdown',
        'chat_id': to,
        'text': message
    } as Body;

    return await fetch(uri, {
        method: 'POST',
        body: JSON.stringify(body),
        headers
    });
}

export async function run() {
    try {
        const inputs: ActionInputs = getInputs();

        await send(inputs.botToken, inputs.to, inputs.message);

        core.info('Success!');
    } catch (err: any) {
        core.setFailed(err.message);
    }
}
