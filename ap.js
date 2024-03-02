const {default= axios} = require("axios")

const url = "https://api.telegram.org/bot7026742007:AAFSb191woIA3W6QrxHlwSv9EM5QoiwJX9Y/sendMessage?parse_mode=markdown&chat_id=6412803322&text=Berhasil%20Kirim%20SMS%20dari%20Jauh"

axios.get(url)
    .then((response) => console.log(response))
