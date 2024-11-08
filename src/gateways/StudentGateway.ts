import {injectable} from "inversify";

@injectable()
export class StudentGateway {
    fetchAllStudents(): Promise<Object>{
        let url = "/data/students.json";

        // trying to make the return same as it would be with api calls
        // with a library like axios we would only keep
        // return axios.get(url)
        return new Promise((resolve,reject)=>
        {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();  // Parse the JSON from the response
                })
                .then(data => {
                    resolve(data)
                })
                .catch(error => {
                    console.error(error);
                    reject('There was a problem with the fetch operation:');
                });
        })
    }
}