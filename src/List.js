import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { useState } from "react";
import Blogview from "./Blogview";
import EditBlog from "./Editblog";
import DeleteBlog from "./Deleteblog";
export default function ActionAreaCard() {
  const blogList = useSelector((state) => state.blogs);

  const num = 120;
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState(null);


  return (
    <Box sx={{ flexGrow: 1, margin: 2 }}>
      {openModal && <Blogview id={id} setOpenModal={setOpenModal} />}
      <Grid container spacing={2}>
        {blogList.value
          .filter((param) =>
            blogList.searchFilter.length > 2
              ? param.title
                  .toLowerCase()
                  .includes(blogList.searchFilter.toLowerCase())
              : param == param
          )
          .filter((param) =>
            blogList.categoryFilter != "Home"
              ? param.category == blogList.categoryFilter
              : param == param
          )
          .map((item) => {
            return (
              <Grid item md={4} sm={6} xs={12}>
                <Card>
                
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="340"
                      image={item.img}
                      alt="green iguana"
                    />
                    <CardContent>
                      <div
                        onClick={() => {
                          setOpenModal(true);
                          setId(item.id);
                        }}
                       
                      >
                        {item.title.length > 40 ? (
                          <h2> {item.title.slice(0, 40) + "..."}</h2>
                        ) : (
                          <h2>{item.title}</h2>
                        )}
                      </div>
                      <Typography variant="body2" color="text.secondary">
                        {item.description.length > num ? (
                          <p>{item.description.slice(0, num) + "..."}</p>
                        ) : (
                          <p>{item.description}</p>
                        )}
                      </Typography>
                      <Typography
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "end",
                        }}
                        variant="body2"
                        color="text.secondary"
                      >
                        <EditBlog data={item} />
                        <DeleteBlog id={item.id} />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
}
