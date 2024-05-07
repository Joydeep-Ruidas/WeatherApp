const submitBtn = document.getElementById('submitBtn')
const cityName = document.getElementById('cityName')
const city_name = document.getElementById('city_name')
const temp_real_val = document.getElementById('temp_real_val')
const temp_status = document.getElementById('temp_status')
const data_hide = document.querySelector('.middle_layer')

const getInfo = async (event) => {
    event.preventDefault();
    cityVal = cityName.value
    if (cityVal === "") {
        city_name.innerText = 'Please enter your city name first'
        data_hide.classList.add('data_hide')
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=aae1fe68f6845ab6b20321d22861c65e`
            const response = await fetch(url)
            const data = await response.json()
            const arrData = [data]
            console.log(arrData)
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempMode = arrData[0].weather[0].main;

            //Conndition to Check Sunny or Cloudy
            if (tempMode == "Clear") {
                temp_status.innerHTML = `<i class="fa-solid fa-sun" style="color: #FFD43B;"></i>`
            }
            else if (tempMode == "Clouds") {
                temp_status.innerHTML = `<i class="fa-solid fa-cloud" style="color: #d0d6e2;"></i>`
            }
            else if (tempMode == "Rain") {
                temp_status.innerHTML = `<i class="fa-solid fa-cloud-rain" style="color: #74C0FC;"></i>`
            }
            else if (tempMode == "Haze") {
                temp_status.innerHTML = `<i class="fa-solid fa-smog" style="color: #8796a1;"></i>`
            }
            else {
                temp_status.innerHTML = `<i class="fa-solid fa-mountain-sun" style="color: #4d7b9d;"></i>`
            }

            data_hide.classList.remove('data_hide')
        } catch {
            city_name.innerText = "Please enter your city name properly"
            data_hide.classList.add('data_hide')
        }
    }
}

submitBtn.addEventListener('click', getInfo)


const getCurrentDay = () => {
    let weekDay = new Array(7)
    weekDay[0] = "SUN"
    weekDay[1] = "MON"
    weekDay[2] = "TUE"
    weekDay[3] = "WED"
    weekDay[4] = "THU"
    weekDay[5] = "FRI"
    weekDay[6] = "SAT"

    let currentTime = new Date()
    let days = weekDay[currentTime.getDay()]
    let day = document.getElementById('day')
    day.innerText = days;
}

getCurrentDay()


const currentDate = () => {
    let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    let now = new Date()
    let month = months[now.getMonth()]
    let date = now.getDate()

    let today_date = document.getElementById('today_date')
    today_date.innerText = `${date} ${month}`
}

currentDate()