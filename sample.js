function infermedica() {
    const settings = {
        async: true,
        crossDomain: true, 
        url:"https://api.infermedica.com/v3/conditions/c_172?age.value=60&age.unit=year",
        method: "GET",
        headers: {
            "Accept" : "application/json",
            "App-Id" : "050f1dba",
            "App-Key" : "2965721055b4955f9a164fa79d384553",
            "Dev-Mode": "true"
        }
    }

    $.ajax(settings).done(function (res) {
        console.log("API call", res)
    })
}
infermedica();

// curl -X GET --header "Accept: application/json" --header "App-Id: 050f1dba" --header "App-Key: 2965721055b4955f9a164fa79d384553" --header "Dev-Mode: true" "https://api.infermedica.com/v3/conditions/c_172?age.value=60&age.unit=year"