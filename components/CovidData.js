import React from 'react'
import _ from 'lodash'
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr'
import MixedChart from '../components/MixedChart'

const API_URL = 'https://brasil.io/api/dataset/covid19/obito_cartorio/data/?format=json'

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

function Covid() {
  const { data, error } = useSWR(API_URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const dataCovid = data.results

  var infoCovid = {}
  var currentDate = ''
    
    var dayOfInfo = ''
    var deaths_covid19 = 0
    var deaths_pneumonia_2019 = 0
    var deaths_pneumonia_2020 = 0
    var deaths_respiratory_failure_2019 = 0
    var deaths_respiratory_failure_2020 = 0
    var new_deaths_covid19 = 0
    var new_deaths_pneumonia_2019 = 0
    var new_deaths_pneumonia_2020 = 0
    var new_deaths_respiratory_failure_2019 = 0
    var new_deaths_respiratory_failure_2020 = 0
    var deaths2019 = []
    var deaths2020 = []
    var deathsCovid19 = []
    var periodDates = []
  
  dataCovid.forEach(element => {

    if(element.date === currentDate){

      dayOfInfo = element.date
      deaths_covid19 += element.deaths_covid19
      deaths_pneumonia_2019 += element.deaths_pneumonia_2019
      deaths_pneumonia_2020 += element.deaths_pneumonia_2020
      deaths_respiratory_failure_2019 += element.deaths_respiratory_failure_2019
      deaths_respiratory_failure_2020 += element.deaths_respiratory_failure_2020
      new_deaths_covid19 += element.new_deaths_covid19
      new_deaths_pneumonia_2019 += element.new_deaths_pneumonia_2019
      new_deaths_pneumonia_2020 += element.new_deaths_pneumonia_2020
      new_deaths_respiratory_failure_2019 += element.new_deaths_respiratory_failure_2019
      new_deaths_respiratory_failure_2020 += element.new_deaths_respiratory_failure_2020

    }else{

      //push information in arrays
      currentDate = element.date
      periodDates.push(element.date)
      deathsCovid19.push(new_deaths_covid19)
      deaths2019.push((new_deaths_respiratory_failure_2019 + new_deaths_pneumonia_2019))
      deaths2020.push((new_deaths_respiratory_failure_2020 + new_deaths_pneumonia_2020))
      
      //restart variables
      dayOfInfo = ''
      deaths_covid19 = 0
      deaths_pneumonia_2019 = 0
      deaths_pneumonia_2020 = 0
      deaths_respiratory_failure_2019 = 0
      deaths_respiratory_failure_2020 = 0
      new_deaths_covid19 = 0
      new_deaths_pneumonia_2019 = 0
      new_deaths_pneumonia_2020 = 0
      new_deaths_respiratory_failure_2019 = 0
      new_deaths_respiratory_failure_2020 = 0

    }

  })

  //Reverse array
  deaths2019.reverse()
  deaths2020.reverse()
  periodDates.reverse()
  deathsCovid19.reverse()

  //Delete last days because maybe data is delayed
  deaths2019.length = 26
  deaths2020.length = 26
  periodDates.length = 26
  deathsCovid19.length = 26


  return (
    <ul>
      <MixedChart deaths2019={deaths2019} periodDates={periodDates} deathsCovid19={deathsCovid19} deaths2020={deaths2020} />
    </ul>
  )

}

export default Covid