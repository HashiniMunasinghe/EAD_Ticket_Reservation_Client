import axios from 'axios';

class TrainDataService {
    apiUrl = 'https://localhost:7230/api/Reservation';

    getReservations = async () => {
        try {
            const response = await axios.get(`${this.apiUrl}/GetReservations`);
            return response.data;
        } catch (error) {
            console.error('Error getting reservations:', error);
            throw error;
        }
    };

    getReservationById = async (id) => {
        try {
            const response = await axios.get(`${this.apiUrl}/GetReservationById/${id}`);
            return response.data;
            
        } catch (error) {
            console.error('Error getting reservation by id:', error);
            throw error;
        }
    };

    addReservation = async (newReserve) => {
        try {
            const response = await axios.post(`${this.apiUrl}/AddReservation`, newReserve);
            return response.data;
        } catch (error) {
            console.error('Error adding reservation:', error);
            throw error;
        }
    };

    // updateReservation = async (id, updatedTrain) => {
    //     try {
    //         const response = await axios.put(`${this.apiUrl}/UpdateReservation/${id}`, updatedTrain);
    //         return response.data;
    //     } catch (error) {
    //         console.error('Error updating train:', error);
    //         throw error;
    //     }
    // };

    // deleteReservation = async (id) => {
    //     try {
    //         const response = await axios.delete(`${this.apiUrl}/DeleteReservation/${id}`);
    //         return response.data;
    //     } catch (error) {
    //         console.error('Error deleting train:', error);
    //         throw error;
    //     }
    // };
}

export default new TrainDataService();
