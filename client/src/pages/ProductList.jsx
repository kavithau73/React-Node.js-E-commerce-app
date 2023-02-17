import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Container=styled.div`

`;
const Title=styled.div`
     margin:20px;
     font-size:30px;
     font-weight:700
`;
const FilterContainer=styled.div`
     display:flex;
     justify-content:space-between;
`;
const Filter=styled.div`
     margin:20px;
     ${mobile({ width: "0px 20px", display:"flex", flexDirection:"column" })}
`;
const FilterText=styled.span`
     font-size:20px;
     font-weight:600;
     margin-right:10px;
`;
const Select=styled.select`
     padding:10px;
     margin: 10px;
     ${mobile({ padding: "5px", margin:"5px 0px", fontSize:"20px" })}
`;
const Option=styled.option`
     padding:20px;
     margin: 30px;
`;
const ProductList = () => {
     const location = useLocation();
     const cat=location.pathname.split("/")[2];
     const [filters, setFilters] = useState({})
     const [sort,setSort]=useState("newest");

     const handleFilters=(e)=>{
         const value=e.target.value;
         setFilters({
          ...filters,
          [e.target.name]: value,
         });
     };
    
 return (
    <Container>
     <Navbar/>
     <Announcement/>
     <Title>Women</Title>
     <FilterContainer>
        <Filter>
            <FilterText>Filter Products:</FilterText>
        <Select name="color" onChange={handleFilters}>
         <Option disabled>color</Option>
         <Option>white</Option>
         <Option>black</Option>
         <Option>red</Option>
         <Option>blue</Option>
         <Option>pink</Option>
         <Option>orange</Option>
         <Option>purple</Option>
         <Option>gray</Option>
        </Select>
        <Select name="size" onChange={handleFilters}>
         <Option disabled>
            Size
         </Option>
         <Option>XS</Option>
         <Option>S</Option>
         <Option>M</Option>
         <Option>L</Option>
         <Option>XL</Option>
        </Select>
        </Filter>
        <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
         <Option value="newest"> Newest</Option>
         <Option value="asc">Price (asc)</Option>
         <Option value="desc">Price (desc)</Option>
        </Select>
        </Filter>
     </FilterContainer>
     <Products cat={cat} filters={filters} sort={sort}/>
     <Newsletter/>
     <Footer/>
    </Container>
  )
}

export default ProductList
