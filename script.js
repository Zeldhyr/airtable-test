const base_airtable = "<CHANGE_ME>"
const api_token = "<CHANGE_ME>"

const airtable = () => {
    return axios.get(
        "https://api.airtable.com/v0/"+ base_airtable +"/Design%20projects",
        { headers: { Authorization: "Bearer " + api_token }}
        )
        .then(response => {
            display = response.data;
            document.write(JSON.stringify(display))
            console.log(`airtable response :`, response.data.records);
        })
        .catch(error => console.error(error));
};


airtable()
