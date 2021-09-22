# Index

## Token

Authorization for accessing the Telegram API. Created and can be reset by chatting with @BotFather.

## How to make the Bot alive

- Node 14 recommended  
- Run file

## Send message "async"

https://api.telegram.org/bot[BOT_TOKEN]/sendMessage?chat_id=[USER_ID]&text=[MESSAGE_TEXT]  

[BOT_TOKEN] env.token  
[USER_ID] ctx.update.message.from.id  
[MESSAGE_TEXT] message
