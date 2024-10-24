import cases from "./data/cases.json"
import gpus from "./data/gpus.json"
import psus from "./data/psus.json"
import cpus from "./data/cpus.json"
import coolers from "./data/coolers.json"
import motherboards from "./data/motherboards.json"
import rams from "./data/rams.json"
import ssds from "./data/ssds.json"



export function getById(id, dataSet) {
    return dataSet.find((item) => item.id === Number(id))
}

export const getCases = () => {
    return cases;
}
export function getSelectedCase() {
    return getById(localStorage.getItem('case-id'), cases);
}
export function setSelectedCaseId(id) {
    return localStorage.setItem('case-id', id);
}

export const getGpus = () => {
    return gpus;
}
export function getSelectedGpu() {
    return getById(localStorage.getItem('gpu-id'), gpus);
}
export function setSelectedGpuId(id) {
    return localStorage.setItem('gpu-id', id);
}

export const getPsus = () => {
    return psus;
}
export function getSelectedPsu() {
    return getById(localStorage.getItem('psu-id'), psus); 
}
export function setSelectedPsuId(id) {
    return localStorage.setItem('psu-id', id); 
}

export const getCpus = () => {
    return cpus;
}
export function getSelectedCpu() {
    return getById(localStorage.getItem('cpu-id'), cpus); 
}
export function setSelectedCpuId(id) {
    return localStorage.setItem('cpu-id', id); 
}

export const getCoolers = () => {
    return coolers;
}
export function getSelectedCooler() {
    return getById(localStorage.getItem('cooler-id'), coolers); 
}
export function setSelectedCoolerId(id) {
    return localStorage.setItem("cooler-id", id);
}

export const getMotherboards = () => {
    return motherboards;
}
export function getSelectedMotherboard() {
    return getById(localStorage.getItem('motherboard-id'), motherboards); 
}
export function setSelectedMotherboardId(id) {
    return localStorage.setItem('motherboard-id', id); 
}

export const getRams = () => {
    return rams;
}
export function getSelectedRam() {
    return getById(localStorage.getItem('ram-id'), rams); 
}
export function setSelectedRamId(id) {
    return localStorage.setItem('ram-id', id); 
}

export const getSsds = () => {
    return ssds;
}
export function getSelectedSsd() {
    return getById(localStorage.getItem('ssd-id'), ssds); 
}
export function setSelectedSsdId(id) {
    return localStorage.setItem('ssd-id', id); 
}
