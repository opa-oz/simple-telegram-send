# Simple Telegram send

[![Coverage](./badges/coverage.svg)](./badges/coverage.svg)

Send it straightforwardly to Telegram
- [x] No Dockerfile / Docker-image
- [x] No external dependencies (works with vanilla actions runner)
- [x] ~No functionality~ Simple to use! 🥳

## Usage
```yaml
- name: Simple Telegram send
  uses: yakubique/simple-telegram-send@v1
  with:
    token: ${{ secrets.TELEGRAM_TOKEN }}
    to: ${{ secrets.TELEGRAM_CHAT_ID }}
    message: "Hello, world!"

```

## Inputs

<!-- AUTO-DOC-INPUT:START - Do not remove or modify this section -->

|  INPUT  |  TYPE  | REQUIRED |                DEFAULT                 |                           DESCRIPTION                           |
|---------|--------|----------|----------------------------------------|-----------------------------------------------------------------|
|  token  | string |   true   |                                        |               Telegram bot's authorization token.               |
|   to    | string |   true   |                                        | Unique identifier or username of the <br>target Telegram chat.  |
| message | string |  false   | `"Ping from ${{ github.repository }}"` |                      Text message to send.                      |

<!-- AUTO-DOC-INPUT:END -->


----

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/S6S1UZ9P7)
