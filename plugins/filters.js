import Vue from "vue"

Vue.filter("transformDate", (value, type = "default") => {
    const date = new Date(value)
    let options = { year: "numeric", month: "short", day: "numeric" }

    if(type === "large") {
      options = { year: 'numeric', month: 'long', day: 'numeric' };
    }

    return new Intl.DateTimeFormat("ve-VE", options).format(date)
})
