import { createDrawerNavigator } from '@react-navigation/drawer';
import AddExpense from '../pages/Drawer/AddExpense';
import Appointments from '../pages/Drawer/Appointments';
import Contractors from '../pages/Drawer/Contractors';
import Expenses from '../pages/Drawer/Expenses';

import BottomTabs from './BottomTabs';
import CustomDrawer from './CustomDrawer';


const Drawer = createDrawerNavigator();

function MyDrawer() {

    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{ headerShown: false, drawerPosition: 'right', }}>
            <Drawer.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false, }} />
            <Drawer.Screen name="appointments" component={Appointments} />
            <Drawer.Screen name="contractors" component={Contractors} />
            <Drawer.Screen name="expenses" component={Expenses} />
        </Drawer.Navigator>
    )
}

export default MyDrawer;