import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    user: 'kells',
    host: 'localhost',
    database: 'distancer',
    password: '',
    port: 5432,
});


const getLocations  = (req, res) => {
    pool.query('SELECT * FROM locations ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

//get single location by Id
const getLocationById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM locations WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

// Create a new location
const createLocation = (req, res) => {
    const {
        name,
        description,
        website,
        phone,
        contact_person,
    } = req.body

    let coordinates = [];

    

    pool.query('INSERT INTO locations (name, description, website, phone, contact_person, coordinates) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [name, description, website, phone, contact_person, coordinates], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).send(`Location details added with ID: ${results.rows[0].id}`)
    })
}

// update a location by its Id
const updateLocation = (req, res) => {
    const id = parseInt(req.params.id)
    const {
        name,
        description,
        website,
        phone,
        coordinates,
        contact_person
    } = req.body

    pool.query('UPDATE locations SET name = $1, description = $2, website = $3, phone = $4, coordinates = $5, contact_person = $6 WHERE id = $7', [name, description, website, phone, coordinates, contact_person, id], 
    (error) => {
        if (error) {
        throw error
        }
        res.status(200).send('Location modified successfully.')
    }
    )
}

const deleteLocation = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('DELETE FROM locations WHERE id = $1', [id], (error) => {
        if (error) {
            throw error
        }
        res.status(200).send('Location deleted successfully.')
    })
}

let queries = {getLocations, getLocationById, createLocation, updateLocation, deleteLocation}

export default queries;