import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import Fooditem from "../foodItem/Fooditem.jsx";

const FoodDisplay = ({category}) => {

    const { foodList } = useContext(StoreContext);
    console.log(category==="All");

    console.log(foodList);

    const filterFoods=foodList.filter((e)=> 
        (category==="All" || e.category.toLowerCase()===category.toLowerCase()) || e.category.toLowerCase().includes(category) )
    console.log(category)

    return (
        <div>
            <div className="row">
                {
                    filterFoods.length > 0 ? (
                        filterFoods.map((e, i) => {
                            return (
                                <Fooditem key={i}
                                e={e}
                                ></Fooditem>
                            )
                        })
                    ) : (
                        <div className="text-center mt-4">
                            <h4>No Food Found.</h4>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default FoodDisplay;