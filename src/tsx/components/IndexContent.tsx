import React from "react"
import {Box, Button} from "@mui/material"
import axios from "axios"

export default function IndexContent(){
    return (
        <Box sx={{width:"50%", marginLeft:"auto", marginRight:"auto", marginTop:"50px",border:"1px solid black"}}>
            this is a home page
            <Button onClick={async () => {
                const result = await axios.post("http://localhost:3200/axios/cors", {test:"test data"}, {headers:{"X-My":"teste header"},timeout:5000})
                console.log(result.data)
            }}>local</Button>
        </Box>
    )
}