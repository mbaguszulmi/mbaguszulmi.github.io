const Api = class {
    static getCertificate() {
        return new Promise((resolve, reject) => {
            fetch('/api/certificate.json')
            .then(response => {
                if (response.status !== 200) reject(new Error("Status code not OK"))
                
                return response.json()
            })
            .then(json => {
                resolve(json)
            })
            .catch(error => {
                reject(new Error(error))
            })
        })
    }

    static getSkills() {
        return new Promise((resolve, reject) => {
            fetch('/api/skills.json')
            .then(response => {
                if (response.status !== 200) reject(new Error("Status code not OK"))
                
                return response.json()
            })
            .then(json => {
                resolve(json)
            })
            .catch(error => {
                reject(new Error(error))
            })
        })
    }
}

export default Api
