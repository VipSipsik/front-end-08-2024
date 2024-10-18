import cases from "./data/cases.json"
import gpus from "./data/gpus.json"
import psus from "./data/psus.json"
import cpus from "./data/cpus.json"
import coolers from "./data/coolers.json"
import motherboards from "./data/motherboards.json"
import rams from "./data/rams.json"
import ssds from "./data/ssds.json"

export function getSelectedCase(){
    return cases.find((item) => item.id === Number(localStorage.getItem('case-id')))
}
export function getSelectedGpu(){
    return gpus.find((item) => { return item.id === Number(localStorage.getItem('gpu-id')) })
}

export function getSelectedPsu(){
    return psus.find((item) => { return item.id === Number(localStorage.getItem('psu-id')) })
}

export function getSelectedCpu(){
    return cpus.find((item) => { return item.id === Number(localStorage.getItem('cpu-id')) })
}

export function getSelectedCooler(){
    return coolers.find((item) => { return item.id === Number(localStorage.getItem('cooler-id')) })
}

export function getSelectedMotherboard(){
    return motherboards.find((item) => { return item.id === Number(localStorage.getItem('motherboard-id')) })
}

export function getSelectedRam(){
    return rams.find((item) => { return item.id === Number(localStorage.getItem('ram-id')) })
}

export function getSelectedSsd(){
    return ssds.find((item) => { return item.id === Number(localStorage.getItem('ssd-id')) })
}
