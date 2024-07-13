import React from 'react';

function Home({data}){


    return(
        <div className="home-page">
            <div className="container">
                <div className="data">
                    <h1>Player</h1>
                    <br></br>
                    {data.map(x =>(
                        <p style={{fontSize: 'small'}} key={x.PlayerID}>{x.FirstName} {x.LastName} </p>
                    ))}
                </div>
                <div style={{marginLeft: "20px"}}className="data">
                    <h1>Position</h1>
                    <br></br>
                    {data.map(x =>(
                        <p style={{fontSize: 'small'}} key={x.PlayerID}>{x.Position}</p>
                    ))}
                </div>
                <div style={{marginLeft: "20px"}}className="data">
                    <h1>Height</h1>
                    <br></br>
                    {data.map(x =>(
                        <p style={{fontSize: 'small'}} key={x.PlayerID}>{x.Height} in</p>
                    ))}
                </div>
                <div style={{marginLeft: "20px"}}className="data">
                    <h1>Weight</h1>
                    <br></br>
                    {data.map(x =>(
                        <p style={{fontSize: 'small'}} key={x.PlayerID}>{x.Weight} pds</p>
                    ))}
                </div>
                <div style={{marginLeft: "20px"}}className="data">
                    <h1>BirthCountry</h1>
                    <br></br>
                    {data.map(x =>(
                        <p style={{fontSize: 'small'}} key={x.PlayerID}>{x.BirthCountry}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Home;