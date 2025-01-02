import {GoogleSpreadsheetRow} from "google-spreadsheet";
import {Contributor, Project} from "../typings/types";
// import {GoogleSpreadsheet} from 'google-spreadsheet'
const {GoogleSpreadsheet} = require('google-spreadsheet')
const spreadsheet = new GoogleSpreadsheet('151wfhiSWlOegOfTjlxIn4ic54TZOy95BWr6yW_t5cBY')
export const getProjects = async () => {
    await spreadsheet.useServiceAccountAuth({
        "type": "service_account",
        "project_id": "pwoc-445919",
        "private_key_id": process.env.PRIVATE_KEY_ID,
        "private_key": process.env.PRIVATE_KEY?.replaceAll("\\n","\n"),
        "client_email": "pwoc-684@pwoc-445919.iam.gserviceaccount.com",
        "client_id": process.env.CLIENT_ID,
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/pwoc-684%40pwoc-445919.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
    })
    await spreadsheet.loadInfo()
    const sheet = spreadsheet.sheetsByIndex[0]
    const rows = await sheet.getRows()
    const projects: Project[] = rows.map((row: GoogleSpreadsheetRow) => {
        const rowData: string[] = row._rawData
        return {
            mentorEmail: rowData[1],
            mentor: rowData[2],
            mentorLinkedinLink: rowData[3],
            mentorGithubLink: rowData[4],
            title: rowData[5],
            githubLink: rowData[6],
            description: rowData[7],
            techStack: rowData[8].split(",").map((tech: string) => {
                return tech.trim().toLowerCase()
            }),
            deploymentLink: rowData[9],
            mentorMobileNumber: Number(rowData[10]),
            mentorDiscordUsername: rowData[11]
        }
    })
    console.log("************, ", projects)
    return projects
}

export const getContributors = async () => {
    await spreadsheet.useServiceAccountAuth({
        "type": "service_account",
        "project_id": "pwoc-445919",
        "private_key_id": process.env.PRIVATE_KEY_ID,
        "private_key": process.env.PRIVATE_KEY?.replaceAll("\\n","\n"),
        "client_email": "pwoc-684@pwoc-445919.iam.gserviceaccount.com",
        "client_id": process.env.CLIENT_ID,
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/pwoc-684%40pwoc-445919.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
    })
    await spreadsheet.loadInfo()
    const sheet = spreadsheet.sheetsByIndex[1]
    const rows = await sheet.getRows()
    const contributors: Contributor[] = rows.map((row: GoogleSpreadsheetRow) => {
        const rowData: string[] = row._rawData
        let username = rowData[5].trim().replace("https://github.com/", "")
        return {
            name: rowData[2],
            email: rowData[1],
            college: rowData[3],
            mobileNumber: rowData[4],
            githubLink: rowData[5],
            username: username
        }
    })
    return contributors
}