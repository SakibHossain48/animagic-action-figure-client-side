import React, { useEffect, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import ShopByCategoryCard from "./ShopByCategoryCard";
import Loader from "../../Shared/Loader/Loader";
import Aos from "aos";

Aos.init();

const ShopByCategory = () => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const [data, setData] = useState([]);
    const [shonenData, setShonenData] = useState([]);
    const [megicalGirlData, setMegicalGirlData] = useState([])
    const [mechaData, setMechaData] = useState([])
    const [loading, setLoading] = useState(true);

    const handleTabChange = (event, tabIndex) => {
        setCurrentTabIndex(tabIndex);
    };

    useEffect(() => {
        fetch("https://animagic-action-figure-server.vercel.app/categoryToys")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.log(error.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const shonenData1 = data.find((dt) => dt._id === "6467d470ca62f50566905ba9");
        const shonenData2 = data.find((dt) => dt._id === "6467d470ca62f50566905baa");
        const shonenData3 = data.find((dt) => dt._id === "6467d470ca62f50566905bab");
        const megicalGirlData1 = data.find((dt) => dt._id === "6467d470ca62f50566905bac");
        const megicalGirlData2 = data.find((dt) => dt._id === "6467d470ca62f50566905bad");
        const megicalGirlData3 = data.find((dt) => dt._id === "6467d470ca62f50566905bae");
        const mechaData1 = data.find((dt) => dt._id === "6467d470ca62f50566905baf");
        const mechaData2 = data.find((dt) => dt._id === "6467d470ca62f50566905bb0");
        const mechaData3 = data.find((dt) => dt._id === "6467d470ca62f50566905bb1");
      
        // Check if all shonenData variables are defined
        if (shonenData1 && shonenData2 && shonenData3) {
          setShonenData([shonenData1, shonenData2, shonenData3]);
          setLoading(false)
        }
         if(megicalGirlData1 && megicalGirlData2 && megicalGirlData3){
            setMegicalGirlData([megicalGirlData1, megicalGirlData2, megicalGirlData3])
            setLoading(false)
         }
         if(mechaData1 && mechaData2 && mechaData3){
            setMechaData([mechaData1, mechaData2, mechaData3])
            setLoading(false)
         }
      }, [data]);

    return (
        <React.Fragment>
            <p className="text-center text-3xl font-bold my-5">Shop By Category</p>
            <div data-aos='flip-left' data-aos-delay='700' className="flex justify-center">
                <Tabs
                    sx={{ backgroundColor: "#e7e2df", py: 2, borderRadius: "10px" }}
                    variant="scrollable"
                    allowScrollButtonsMobile
                    value={currentTabIndex}
                    onChange={handleTabChange}
                >
                    <Tab className="tab" label="Shonen Action Figures" />
                    <Tab className="tab" label="Magical Girl Action Figures" />
                    <Tab className="tab" label="Mecha Action Figures" />
                </Tabs>
            </div>

            {/* TAB 1 Contents */}
            {currentTabIndex === 0 && (
                <Box sx={{ p: 3, width: "100%", margin: "auto", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div data-aos='fade-up' data-aos-delay='700' className="border-2 shadow-2xl p-5 mx-5">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto justify-center items-center">
                            {
                                loading ? <Loader /> :
                                     shonenData.map(sd => (
                                        <ShopByCategoryCard key={sd._id} data={sd} />
                                    ))
                            }
                        </div>
                    </div>
                </Box>
            )}

            {/* TAB 2 Contents */}
            {currentTabIndex === 1 && (
                <Box sx={{ p: 3, width: "100%", margin: "auto", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div data-aos='fade-down' data-aos-delay='700'  className="border-2 shadow-2xl p-5 mx-5">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {
                                loading ? <Loader /> :
                                     megicalGirlData.map(sd => (
                                        <ShopByCategoryCard key={sd._id} data={sd} />
                                    ))
                            }
                        </div>
                    </div>
                </Box>
            )}

            {/* TAB 3 Contents */}
            {currentTabIndex === 2 && (
                <Box sx={{ p: 3, width: "100%", margin: "auto", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div data-aos='fade-up' data-aos-delay='700'  className="border-2 shadow-2xl p-5 mx-5">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {
                                loading ? <Loader /> :
                                     mechaData.map(sd => (
                                        <ShopByCategoryCard key={sd._id} data={sd} />
                                    ))
                            }
                        </div>
                    </div>
                </Box>
            )}
        </React.Fragment>
    );
};

export default ShopByCategory;
