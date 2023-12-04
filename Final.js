import  React, {useState} from 'react';
import { Button, View, Text, Image, StatusBar, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';



//Welcome page start
function Welcome({ navigation }) {

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Hello Kids!!!</Text>
    <Text style={styles.title1}>Welcome to Book App</Text>
    <Image source={{
        width:200,
        height:150,
        marginBottom: 50,
        padding: 40,
        alignItems: 'center',
        uri: "https://i.pinimg.com/originals/d0/bb/b5/d0bbb5b9cab774f815787088aaa41482.jpg"
      }}
      />
 
      <StatusBar style="auto" />
    
 
      <TouchableOpacity style={styles.Welcome} onPress={() => navigation.navigate('Login')}>
        <Text> Login </Text>
      </TouchableOpacity>

            <TouchableOpacity style={styles.Welcome} onPress={() => navigation.navigate('Register')}>
        <Text> Register </Text>
      </TouchableOpacity>
    </View>
  );
}
//Welcome page end


//Login page start
function Login({ navigation }) {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

  return (

    <View style={styles.container}>
    <Text style={styles.title}>Book App</Text>
    <Text style={styles.title1}>Login</Text>
    <Image source={{
        width:200,
        height:150,
        marginBottom: 50,
        padding: 40,
        alignItems: 'center',
        uri: "https://cdn5.vectorstock.com/i/1000x1000/87/29/three-kids-reading-books-vector-10948729.jpg"
      }}
      />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity style={styles.reg} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.register_button} >If Your Are New User Register Now!</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Dashboard')}>
        <Text>LOGIN</Text>
      </TouchableOpacity>


    </View>
  );
}
//Login page end


//Register page start
function Register({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Book App</Text>
    <Text style={styles.title1}>Register Now!</Text>
    <Image source={{
        width:200,
        height:150,
        marginBottom: 50,
        padding: 40,
        alignItems: 'center',
        uri: "https://png.pngtree.com/png-clipart/20201225/ourlarge/pngtree-commercially-available-cartoon-characters-reading-books-on-world-book-day-png-image_2620642.jpg"
      }}
      />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email Address"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

            <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Conform Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity style={styles.log} onPress={() => navigation.navigate('Login')}>
        <Text>If Your Have An Account Login Now!</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.registerBtn} onPress={() => navigation.navigate('Dashboard')}>
        <Text>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
}
//Register page end


//Dashboard start
function Dashboard({ navigation }) {

  
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Hello Kids!!!</Text>
    <Text style={styles.title1}>Welcome to Book App</Text>
    <Image source={{
        width:200,
        height:150,
        marginBottom: 50,
        padding: 40,
        alignItems: 'center',
        uri: "https://png.pngtree.com/png-clipart/20201224/ourlarge/pngtree-cartoon-character-material-for-reading-books-on-world-book-day-png-image_2625629.jpg"
      }}
      />
 
      <StatusBar style="auto" />
    
 
      <TouchableOpacity style={styles.dashboard} onPress={() => navigation.navigate('Categories')}>
        <Text> Go To Books Categories </Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.dashboard} onPress={() => navigation.navigate('MyProfile')}>
        <Text> My Profile </Text>
        
      </TouchableOpacity>
    </View>
  );
}
//Dashboard end

//Book Categories start
function Categories ({ navigation }) {
return (
      <ScrollView style={styles.scrollView}>
        
          <Text style={styles.catTitle}>Books Categories Lists</Text>
            <View style={styles.container}>
               <View style={styles.image}>
                  <Image source={{
                    width:250,
                    height:200,
                    marginBottom: 50,
                    padding: 40,
                    alignItems: 'center',
                    uri: "https://image.shutterstock.com/image-vector/cartoon-kidsboy-girls-read-books-260nw-1457271773.jpg"
                  }}
                  />
          </View>
          </View>



        <TouchableOpacity style={styles.listBtn} onPress={() => navigation.navigate('Adventure')}>
                            <Text>Action and Adventure</Text>
         </TouchableOpacity>

        <TouchableOpacity style={styles.listBtn} onPress={() => navigation.navigate('Classic')}>
                           <Text>Classics</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listBtn} onPress={() => navigation.navigate('Comic')}>
                          <Text>Comics Books</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listBtn} onPress={() => navigation.navigate('Mystery')}>
                         <Text>Mystery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listBtn} onPress={() => navigation.navigate('Fantasy')}>
                           <Text>Fantasy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listBtn} onPress={() => navigation.navigate('Romance')}>
                          <Text>Romance</Text>
        </TouchableOpacity>
</ScrollView>
)
}
//Book Categories end



//Adventure Categories start
function Adventure ({ navigation }) {
    return (
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

        <View style={styles.image}>
        <Image source={{
        width:250,
        height:370,
        padding: 50,
        alignItems: 'center',
        uri: "https://images.moviesanywhere.com/96bd7bb89837cbc977226e3f34bdfd74/07023173-c479-4877-999a-964e01d01f92.jpg"
      }}
      />
      </View>
      <TouchableOpacity style={styles.advBtn} onPress={() => navigation.navigate('Lightning')}>
      <Text> The Lightning Thief </Text>
      </TouchableOpacity>

      <View style={styles.image}>
      <Image source={{
              width:250,
        height:370,
        padding: 50,
              alignItems: 'center',
              uri: "https://images-na.ssl-images-amazon.com/images/I/71ytF9dFQ3L.jpg"
            }}

      />
      </View>


      <TouchableOpacity style={styles.advBtn} onPress={() => navigation.navigate('Hatchet')}>
      <Text> Hatchet </Text>
      </TouchableOpacity>


      <View style={styles.image}>
      <Image source={{
              width:250,
              height:370,
              padding: 50,
              alignItems: 'center',
              uri: "https://kbimages1-a.akamaihd.net/08bb082e-e9d4-492e-b2ae-ee04233dbc33/353/569/90/False/treasure-island-450.jpg"
            }}

      />
      </View>
      <TouchableOpacity style={styles.advBtn} onPress={() => navigation.navigate('Treasure')}>
      <Text> Treasure Island </Text>
      </TouchableOpacity>


</View>
</ScrollView>
)
}
//Adventure Categories end


//Adventure Books Categories start
function Lightning ({ navigation }) {
return (
      <ScrollView style={styles.scrollViewB}>
      <Card style={styles.card}>
      <View style={styles.container}>
      <View style={styles.imageB}>
      <Image source={{
        width:250,
        height:370,
        padding: 50,
        alignItems: 'center',
        uri: "https://images.moviesanywhere.com/96bd7bb89837cbc977226e3f34bdfd74/07023173-c479-4877-999a-964e01d01f92.jpg"}}/>
      </View>


      <Text style={styles.detailstitle}>
              Book Name :- The Lightning Thief

              {'\n'}{'\n'}Author :- Rick Riordan

              {'\n'}{'\n'}About This Book :- {'\n'}The Lightning Thief is a 2005 American-fantasy-adventure novel based on Greek mythology, the first young adult novel written by Rick Riordan in the Percy Jackson & the Olympians series. It won the Adult Library Services Association Best Books for Young Adults, among other awards.

              {'\n'}{'\n'}Price :- Rs. 900.00
       </Text>
  </View>


      <Card.Content>
                <TouchableOpacity style={styles.detailstBtn} onPress={() => navigation.navigate('Cart')}>
                              <Text> Add to Cart </Text>
                </TouchableOpacity>

      </Card.Content>
      </Card>
</ScrollView>
)
}

function Hatchet ({ navigation }) {
return (
      <ScrollView style={styles.scrollViewB}>
      <Card style={styles.card}>
      <View style={styles.container}>
      <View style={styles.imageB}>
            <Image source={{
              width:250,
              height:370,
              padding: 50,
              alignItems: 'center',
              uri: "https://images-na.ssl-images-amazon.com/images/I/71ytF9dFQ3L.jpg"}}/>
      </View>


          <Text style={styles.detailstitle}>
                  Book Name :- Hatchet

                  {'\n'}{'\n'}Author :- Gary Paulsen

                  {'\n'}{'\n'}About This Book :- {'\n'}Hatchet is a 1986 Newbery Honor-winning young-adult wilderness survival novel written by American writer Gary Paulsen. It is the first novel of five in the Hatchet series. Other novels in the series include The River, Brian's Winter, Brian's Return and Brian's Hunt.

                  {'\n'}{'\n'}Price :- Rs. 1200.00
          </Text>
  </View>


      <Card.Content>
                <TouchableOpacity style={styles.detailstBtn} onPress={() => navigation.navigate('Cart')}>
                              <Text> Add to Cart </Text>
                </TouchableOpacity>

      </Card.Content>
      </Card>
</ScrollView>
)
}

function Treasure ({ navigation }) {
return (
      <ScrollView style={styles.scrollViewB}>
      <Card style={styles.card}>
      <View style={styles.container}>
      <View style={styles.imageB}>
      <Image source={{
                  width:250,
                  height:370,
                  padding: 50,
                  alignItems: 'center',
                  uri: "https://kbimages1-a.akamaihd.net/08bb082e-e9d4-492e-b2ae-ee04233dbc33/353/569/90/False/treasure-island-450.jpg"}}/>
      </View>


          <Text style={styles.detailstitle}>
                  Book Name :- Treasure Island

                  {'\n'}{'\n'}Author :- Robert Louis Stevenson

                  {'\n'}{'\n'}About This Book :- {'\n'}Treasure Island is an adventure novel by Scottish author Robert Louis Stevenson, telling a story of "buccaneers and buried gold". It is considered a coming-of-age story and is noted for its atmosphere, characters, and action.

                  {'\n'}{'\n'}Price :- Rs. 800.00
          </Text>
  </View>


      <Card.Content>
                <TouchableOpacity style={styles.detailstBtn} onPress={() => navigation.navigate('Cart')}>
                              <Text> Add to Cart </Text>
                </TouchableOpacity>

      </Card.Content>
      </Card>
</ScrollView>
)
}
//Adventure Books Categories end



//Classic Categories start
function Classic ({ navigation }) {
    return (
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

        <View style={styles.image}>
        <Image source={{
        width:250,
        height:370,
        padding: 50,
        alignItems: 'center',
        uri: "https://almabooks.com/wp-content/uploads/2016/10/9781847495778.jpg"
      }}
      />
      </View>
      <TouchableOpacity style={styles.advBtn} onPress={() => navigation.navigate('Wonderful')}>
      <Text> The Wonderful Wizard of OZ </Text>
      </TouchableOpacity>



      <View style={styles.image}>
      <Image source={{
              width:250,
        height:370,
        padding: 50,
              alignItems: 'center',
              uri: "https://www.pluggedin.com/wp-content/uploads/2020/01/hobbit-cover-670x1024.jpg"
            }}

      />
      </View>
      <TouchableOpacity style={styles.advBtn} onPress={() => navigation.navigate('Hobbit')}>
      <Text> The Hobbit </Text>
      </TouchableOpacity>


      <View style={styles.image}>
      <Image source={{
              width:250,
              height:370,
              padding: 50,
              alignItems: 'center',
              uri: "https://www.penguin.co.uk/content/dam/prh/books/444/444046/9780241523575.jpg"
            }}/>
      </View>
      <TouchableOpacity style={styles.advBtn} onPress={() => navigation.navigate('Peter')}>
      <Text> The Tale of Peter Rabbit </Text>
      </TouchableOpacity>


</View>
</ScrollView>
)
}
//Classic Categories end


//Classic Books Categories Start
function Wonderful ({ navigation }) {
return (
      <ScrollView style={styles.scrollViewB}>
      <Card style={styles.card}>
      <View style={styles.container}>
      <View style={styles.imageB}>
      <Image source={{
        width:250,
        height:370,
        padding: 50,
        alignItems: 'center',
        uri: "https://almabooks.com/wp-content/uploads/2016/10/9781847495778.jpg"}}/>

      </View>


          <Text style={styles.detailstitle}>
                  Book Name : The Wonderful Wizard of OZ

                  {'\n'}{'\n'}Author : L. Frank Baum

                  {'\n'}{'\n'}About This Book : {'\n'}The Wonderful Wizard of Oz is an American children's novel written by author L. Frank Baum and illustrated by W. W. Denslow. The first novel in the Oz books, the Kansas farm girl named Dorothy ends up in the magical Land of Oz after she and her pet dog Toto are swept away from their home by a tornado.

                  {'\n'}{'\n'}Language: English

                  {'\n'}{'\n'}Price : Rs. 650.00
          </Text>
  </View>


      <Card.Content>
                <TouchableOpacity style={styles.detailstBtn} onPress={() => navigation.navigate('Cart')}>
                              <Text> Add to Cart </Text>
                </TouchableOpacity>

      </Card.Content>
      </Card>
</ScrollView>
)
}

function Hobbit ({ navigation }) {
return (
      <ScrollView style={styles.scrollViewB}>
      <Card style={styles.card}>
      <View style={styles.container}>
      <View style={styles.imageB}>
      <Image source={{
              width:250,
              height:370,
              padding: 50,
              alignItems: 'center',
              uri: "https://www.pluggedin.com/wp-content/uploads/2020/01/hobbit-cover-670x1024.jpg"}}/>


      </View>


          <Text style={styles.detailstitle}>
                  Book Name : The Hobbit 

                  {'\n'}{'\n'}Author : J. R. R. Tolkien

                  {'\n'}{'\n'}About This Book : {'\n'}The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published in 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction.

                  {'\n'}{'\n'}Language: English

                  {'\n'}{'\n'}Price : Rs. 750.00
          </Text>
  </View>


      <Card.Content>
                <TouchableOpacity style={styles.detailstBtn} onPress={() => navigation.navigate('Cart')}>
                              <Text> Add to Cart </Text>
                </TouchableOpacity>

      </Card.Content>
      </Card>
</ScrollView>
)
}

function Peter ({ navigation }) {
return (
      <ScrollView style={styles.scrollViewB}>
      <Card style={styles.card}>
      <View style={styles.container}>
      <View style={styles.imageB}>
      <Image source={{
              width:250,
              height:370,
              padding: 50,
              alignItems: 'center',
              uri: "https://www.penguin.co.uk/content/dam/prh/books/444/444046/9780241523575.jpg"}}/>


      </View>


          <Text style={styles.detailstitle}>
                  Book Name : The Tale of Peter Rabbit  

                  {'\n'}{'\n'}Author : Beatrix Potter

                  {'\n'}{'\n'}About This Book : {'\n'}The Tale of Peter Rabbit is a children's book written and illustrated by Beatrix Potter that follows mischievous and disobedient young Peter Rabbit as he gets into, and is chased around, the garden of Mr. McGregor. He escapes and returns home to his mother, who puts him to bed after offering him chamomile-tea.

                  {'\n'}{'\n'}Language: English

                  {'\n'}{'\n'}Price : Rs. 450.00
          </Text>
  </View>


      <Card.Content>
                <TouchableOpacity style={styles.detailstBtn} onPress={() => navigation.navigate('Cart')}>
                              <Text> Add to Cart </Text>
                </TouchableOpacity>

      </Card.Content>
      </Card>
</ScrollView>
)
}

//Comic Categories start
function Comic  ({ navigation }) {
    return (
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

        <View style={styles.image}>
        <Image source={{
        width:250,
        height:370,
        padding: 50,
        alignItems: 'center',
        uri: "https://i.annihil.us/u/prod/marvel/i/mg/5/03/61f018b683263/portrait_uncanny.jpg"
      }}
      />
      </View>
      <TouchableOpacity style={styles.advBtn} onPress={() => navigation.navigate('Iron')}>
      <Text> Iron Man </Text>
      </TouchableOpacity>



      <View style={styles.image}>
      <Image source={{
              width:250,
        height:370,
        padding: 50,
              alignItems: 'center',
              uri: "https://lumiere-a.akamaihd.net/v1/images/maractsminf001_cov_2a89b17b.jpeg?region=0%2C0%2C1844%2C2800"
            }}

      />
      </View>
      <TouchableOpacity style={styles.advBtn} onPress={() => navigation.navigate('Spider')}>
      <Text> Spider-Man </Text>
      </TouchableOpacity>


      <View style={styles.image}>
      <Image source={{
              width:250,
              height:370,
              padding: 50,
              alignItems: 'center',
              uri: "https://c8.alamy.com/comp/RY4ED3/hulk-marvel-comic-the-incredible-hulk-comic-2003-RY4ED3.jpg"
            }}/>
      </View>
      <TouchableOpacity style={styles.advBtn} onPress={() => navigation.navigate('HULK')}>
      <Text> HULK </Text>
      </TouchableOpacity>


</View>
</ScrollView>
)
}
//Comic Categories end


//Comic Books Categories strt
function Iron({ navigation }) {
return (
      <ScrollView style={styles.scrollViewB}>
      <Card style={styles.card}>
      <View style={styles.container}>
      <View style={styles.imageB}>
      <Image source={{
        width:250,
        height:370,
        padding: 50,
        alignItems: 'center',
        uri: "https://i.annihil.us/u/prod/marvel/i/mg/5/03/61f018b683263/portrait_uncanny.jpg"}}/>



      </View>


          <Text style={styles.detailstitle}>
                  Book Name : Iron Man   

                  {'\n'}{'\n'}Author :  Stan Lee

                  {'\n'}{'\n'}About This Book : {'\n'}The Invincible Iron Man," in which Tony Stark travels to exotic locations with Pepper Pots to fight against Ezekiel Stane, who has manipulated Stark's technologies in his plot to avenge his fallen father, Obadiah.

                  {'\n'}{'\n'}Language: English

                  {'\n'}{'\n'}Price : Rs. 1000.00
          </Text>
  </View>


      <Card.Content>
                <TouchableOpacity style={styles.detailstBtn} onPress={() => navigation.navigate('Cart')}>
                              <Text> Add to Cart </Text>
                </TouchableOpacity>

      </Card.Content>
      </Card>
</ScrollView>
)
}

function Spider ({ navigation }) {
return (
      <ScrollView style={styles.scrollViewB}>
      <Card style={styles.card}>
      <View style={styles.container}>
      <View style={styles.imageB}>
      <Image source={{
              width:250,
              height:370,
              padding: 50,
              alignItems: 'center',
              uri: "https://lumiere-a.akamaihd.net/v1/images/maractsminf001_cov_2a89b17b.jpeg?region=0%2C0%2C1844%2C2800"}}/>




      </View>


          <Text style={styles.detailstitle}>
                  Book Name : Spider-Man    

                  {'\n'}{'\n'}Author :  Stan Lee

                  {'\n'}{'\n'}About This Book : {'\n'}Acrobatic adventures by some of yesteryear's top names! Is she heroine, criminal, or both? What motivates her madcap mischief? That's for the Black Cat to know and Spider-Man to find out in his first fights with one his most famous femme fatales! Only available in North America.

                  {'\n'}{'\n'}Language: English

                  {'\n'}{'\n'}Price : Rs. 1000.00
          </Text>
  </View>


      <Card.Content>
                <TouchableOpacity style={styles.detailstBtn} onPress={() => navigation.navigate('Cart')}>
                              <Text> Add to Cart </Text>
                </TouchableOpacity>

      </Card.Content>
      </Card>
</ScrollView>
)
}

function HULK ({ navigation }) {
return (
      <ScrollView style={styles.scrollViewB}>
      <Card style={styles.card}>
      <View style={styles.container}>
      <View style={styles.imageB}>
      <Image source={{
              width:250,
              height:370,
              padding: 50,
              alignItems: 'center',
              uri: "https://c8.alamy.com/comp/RY4ED3/hulk-marvel-comic-the-incredible-hulk-comic-2003-RY4ED3.jpg"
            }}/>
      </View>


          <Text style={styles.detailstitle}>
                  Book Name : HULK    

                  {'\n'}{'\n'}Author :  Simon Bowland, Greg Pak, Rick Magyar, Dean White

                  {'\n'}{'\n'}About This Book : {'\n'}The Hulk has never been welcome in the civilized world. What better place for the savage Hulks than the Savage Land? Get ready for jungle action as Hulk and Skaar invade the prehistoric paradise of Ka-Zar, Lord of the Hidden Jungle.

                  {'\n'}{'\n'}Language: English

                  {'\n'}{'\n'}Price : Rs. 1000.00
          </Text>
  </View>


      <Card.Content>
                <TouchableOpacity style={styles.detailstBtn} onPress={() => navigation.navigate('Cart')}>
                              <Text> Add to Cart </Text>
                </TouchableOpacity>

      </Card.Content>
      </Card>
</ScrollView>
)
}
//Comic Books Categories end

//Fantasy Categories start
function Fantasy  ({ navigation }) {
    return (
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

        <View style={styles.image}>
        <Image source={{
        width:250,
        height:370,
        padding: 50,
        alignItems: 'center',
        uri: "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781526626585.jpg"}}/>
      </View>
      <TouchableOpacity style={styles.advBtn} onPress={() => navigation.navigate('Harry')}>
      <Text> Harry Potter </Text>
      </TouchableOpacity>



      <View style={styles.image}>
      <Image source={{
              width:250,
              height:370,
              padding: 50,
              alignItems: 'center',
              uri: "https://m.media-amazon.com/images/I/51C9RUPrTyL.jpg"}}/>
      </View>
      <TouchableOpacity style={styles.advBtn} onPress={() => navigation.navigate('Monsters')}>
      <Text> The Sea of Monsters </Text>
      </TouchableOpacity>


      <View style={styles.image}>
      <Image source={{
              width:250,
              height:370,
              padding: 50,
              alignItems: 'center',
              uri: "https://images-na.ssl-images-amazon.com/images/I/A18+GnPwHXL.jpg"
            }}/>
      </View>
      <TouchableOpacity style={styles.advBtn} onPress={() => navigation.navigate('Redwall')}>
      <Text> Redwall </Text>
      </TouchableOpacity>


</View>
</ScrollView>
)
}
//Fantasy Categories end

//Fantasy Books Categories start
function Harry ({ navigation }) {
return (
      <ScrollView style={styles.scrollViewB}>
      <Card style={styles.card}>
      <View style={styles.container}>
      <View style={styles.imageB}>
      <Image source={{
        width:250,
        height:370,
        padding: 50,
        alignItems: 'center',
        uri: "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781526626585.jpg"}}/>




      </View>


          <Text style={styles.detailstitle}>
                  Book Name : Harry Potter       

                  {'\n'}{'\n'}Author :  J. K. Rowling

                  {'\n'}{'\n'}About This Book : {'\n'}Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.

                  {'\n'}{'\n'}Language: English

                  {'\n'}{'\n'}Price : Rs. 1500.00
          </Text>
  </View>


      <Card.Content>
                <TouchableOpacity style={styles.detailstBtn} onPress={() => navigation.navigate('Cart')}>
                              <Text> Add to Cart </Text>
                </TouchableOpacity>

      </Card.Content>
      </Card>
</ScrollView>
)
}

function Monsters ({ navigation }) {
return (
      <ScrollView style={styles.scrollViewB}>
      <Card style={styles.card}>
      <View style={styles.container}>
      <View style={styles.imageB}>
      <Image source={{
              width:250,
              height:370,
              padding: 50,
              alignItems: 'center',
              uri: "https://m.media-amazon.com/images/I/51C9RUPrTyL.jpg"}}/>
      </View>


          <Text style={styles.detailstitle}>
                  Book Name : The Sea of Monsters       

                  {'\n'}{'\n'}Author :  Rick Riordan

                  {'\n'}{'\n'}About This Book : {'\n'}The Sea of Monsters is an American fantasy-adventure novel based on Greek mythology written by Rick Riordan and published in 2006. It is the second novel in the Percy Jackson & the Olympians series and the sequel to The Lightning Thief.

                  {'\n'}{'\n'}Language: English

                  {'\n'}{'\n'}Price : Rs. 1500.00
          </Text>
  </View>


      <Card.Content>
                <TouchableOpacity style={styles.detailstBtn} onPress={() => navigation.navigate('Cart')}>
                              <Text> Add to Cart </Text>
                </TouchableOpacity>

      </Card.Content>
      </Card>
</ScrollView>
)
}

function Redwall ({ navigation }) {
return (
      <ScrollView style={styles.scrollViewB}>
      <Card style={styles.card}>
      <View style={styles.container}>
      <View style={styles.imageB}>
      <Image source={{
              width:250,
              height:370,
              padding: 50,
              alignItems: 'center',
              uri: "https://images-na.ssl-images-amazon.com/images/I/A18+GnPwHXL.jpg"
            }}/>
      </View>


          <Text style={styles.detailstitle}>
                  Book Name : Redwall       

                  {'\n'}{'\n'}Author :  Brian Jacques

                  {'\n'}{'\n'}About This Book : {'\n'}Redwall is a fantasy novel by Brian Jacques. Originally published in 1986, it is the first book of the Redwall series. The book was illustrated by Gary Chalk, with the British cover illustration by Pete Lyon and the American cover by Troy Howell.

                  {'\n'}{'\n'}Language: English

                  {'\n'}{'\n'}Price : Rs. 1500.00
          </Text>
  </View>


      <Card.Content>
                <TouchableOpacity style={styles.detailstBtn} onPress={() => navigation.navigate('Cart')}>
                              <Text> Add to Cart </Text>
                </TouchableOpacity>

      </Card.Content>
      </Card>
</ScrollView>
)
}
//Fantasy Books Categories end

//Mystery Categories start
function Mystery  ({ navigation }) {
    return (
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

        <View style={styles.image}>
        <Image source={{
        width:250,
        height:370,
        padding: 50,
        alignItems: 'center',
        uri: "https://images-na.ssl-images-amazon.com/images/I/815qVQVm0QL.jpg"}}/>
      </View>
      <TouchableOpacity style={styles.advBtn} onPress={() => navigation.navigate('Artemis')}>
      <Text> Artemis Fowl </Text>
      </TouchableOpacity>



      <View style={styles.image}>
      <Image source={{
              width:250,
              height:370,
              padding: 50,
              alignItems: 'center',
              uri: "https://www.ubuy.com.lk/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzUxT0Jkakx6R3lMLmpwZw.jpg"}}/>
      </View>
      <TouchableOpacity style={styles.advBtn} onPress={() => navigation.navigate('Secret')}>
      <Text> The Secret Zoo </Text>
      </TouchableOpacity>


      <View style={styles.image}>
      <Image source={{
              width:250,
              height:370,
              padding: 50,
              alignItems: 'center',
              uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328323301l/13001535.jpg"
            }}/>
      </View>
      <TouchableOpacity style={styles.advBtn} onPress={() => navigation.navigate('Lawyer')}>
      <Text> Theodore Boone: Kid Lawyer </Text>
      </TouchableOpacity>


</View>
</ScrollView>
)
}

//Mystery Books Categories start
function Artemis ({ navigation }) {
return (
      <ScrollView style={styles.scrollViewB}>
      <Card style={styles.card}>
      <View style={styles.container}>
      <View style={styles.imageB}>
      <Image source={{
        width:250,
        height:370,
        padding: 50,
        alignItems: 'center',
        uri: "https://images-na.ssl-images-amazon.com/images/I/815qVQVm0QL.jpg"}}/>

      </View>


          <Text style={styles.detailstitle}>
                  Book Name : Artemis Fowl     

                  {'\n'}{'\n'}Author :  Eoin Colfer

                  {'\n'}{'\n'}About This Book : {'\n'}Artemis Fowl is an Irish young adult fantasy novel written by Irish author Eoin Colfer. It is the first book in the Artemis Fowl series, the first cycle of The Fowl Adventures, followed by Artemis Fowl and the Arctic Incident.

                  {'\n'}{'\n'}Language: English

                  {'\n'}{'\n'}Price : Rs. 800.00
          </Text>
  </View>


      <Card.Content>
                <TouchableOpacity style={styles.detailstBtn} onPress={() => navigation.navigate('Cart')}>
                              <Text> Add to Cart </Text>
                </TouchableOpacity>

      </Card.Content>
      </Card>
</ScrollView>
)
}

function Secret ({ navigation }) {
return (
      <ScrollView style={styles.scrollViewB}>
      <Card style={styles.card}>
      <View style={styles.container}>
      <View style={styles.imageB}>
      <Image source={{
              width:250,
              height:370,
              padding: 50,
              alignItems: 'center',
              uri: "https://www.ubuy.com.lk/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzUxT0Jkakx6R3lMLmpwZw.jpg"}}/>


      </View>


          <Text style={styles.detailstitle}>
                  Book Name : The Secret Zoo      

                  {'\n'}{'\n'}Author :  Chick Bryan

                  {'\n'}{'\n'}About This Book : {'\n'}A fast-paced and exciting read for middle grade fantasy, mystery, and animal buffs. Something strange is happening at the Clarksville City Zoo. Late at night, monkeys are scaling the walls and searching the neighborhood—but what are they looking for? ...

                  {'\n'}{'\n'}Language: English

                  {'\n'}{'\n'}Price : Rs. 800.00
          </Text>
  </View>


      <Card.Content>
                <TouchableOpacity style={styles.detailstBtn} onPress={() => navigation.navigate('Cart')}>
                              <Text> Add to Cart </Text>
                </TouchableOpacity>

      </Card.Content>
      </Card>
</ScrollView>
)
}

function Lawyer ({ navigation }) {
return (
      <ScrollView style={styles.scrollViewB}>
      <Card style={styles.card}>
      <View style={styles.container}>
      <View style={styles.imageB}>
      <Image source={{
              width:250,
              height:370,
              padding: 50,
              alignItems: 'center',
              uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328323301l/13001535.jpg"
            }}/>



      </View>


          <Text style={styles.detailstitle}>
                  Book Name : Theodore Boone: Kid Lawyer       

                  {'\n'}{'\n'}Author :  John Grisham

                  {'\n'}{'\n'}About This Book : {'\n'}Theodore Boone: Kid Lawyer, known as Theodore Boone: Young Lawyer in the UK, is a 2010 legal drama and the first novel by John Grisham for middle-grade children. It is the first in a series about Theodore Boone.

                  {'\n'}{'\n'}Language: English

                  {'\n'}{'\n'}Price : Rs. 800.00
          </Text>
  </View>


      <Card.Content>
                <TouchableOpacity style={styles.detailstBtn} onPress={() => navigation.navigate('Cart')}>
                              <Text> Add to Cart </Text>
                </TouchableOpacity>

      </Card.Content>
      </Card>
</ScrollView>
)
}
//Mystery Books Categories end


//Romance Categories start
function Romance  ({ navigation }) {
    return (
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

        <View style={styles.image}>
        <Image source={{
        width:250,
        height:370,
        padding: 50,
        alignItems: 'center',
        uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1430777230l/22400478.jpg"}}/>
      </View>
      <TouchableOpacity style={styles.advBtn} onPress={() => navigation.navigate('Cupid')}>
      <Text> I'm With Cupid </Text>
      </TouchableOpacity>



      <View style={styles.image}>
      <Image source={{
              width:250,
              height:370,
              padding: 50,
              alignItems: 'center',
              uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1454864389l/28954056.jpg"}}/>
      </View>
      <TouchableOpacity style={styles.advBtn} onPress={() => navigation.navigate('Crushing')}>
      <Text> Crushing It </Text>
      </TouchableOpacity>


      <View style={styles.image}>
      <Image source={{
              width:250,
              height:370,
              padding: 50,
              alignItems: 'center',
              uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1636615606l/58784487.jpg"
            }}/>
      </View>
      <TouchableOpacity style={styles.advBtn} onPress={() => navigation.navigate('Besharam')}>
      <Text> Beauty and the Besharam </Text>
      </TouchableOpacity>


</View>
</ScrollView>
)
}
//Romance Categories end

//Romance Books Categories start
function Cupid ({ navigation }) {
return (
      <ScrollView style={styles.scrollViewB}>
      <Card style={styles.card}>
      <View style={styles.container}>
      <View style={styles.imageB}>
     <Image source={{
        width:250,
        height:370,
        padding: 50,
        alignItems: 'center',
        uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1430777230l/22400478.jpg"}}/>

      </View>


          <Text style={styles.detailstitle}>
                  Book Name : I'm With Cupid        

                  {'\n'}{'\n'}Author :  Anna Staniszewski

                  {'\n'}{'\n'}About This Book : {'\n'}Marcus is a Cupid. Lena is a Reaper. Opposites attract in the exciting new Switched At First Kiss series by the acclaimed author of The Dirt Diary.Dared to kiss the adorkable Marcus Torelli at a party, ...

                  {'\n'}{'\n'}Language: English

                  {'\n'}{'\n'}Price : Rs. 800.00
          </Text>
  </View>


      <Card.Content>
                <TouchableOpacity style={styles.detailstBtn} onPress={() => navigation.navigate('Cart')}>
                              <Text> Add to Cart </Text>
                </TouchableOpacity>

      </Card.Content>
      </Card>
</ScrollView>
)
}

function Crushing ({ navigation }) {
return (
      <ScrollView style={styles.scrollViewB}>
      <Card style={styles.card}>
      <View style={styles.container}>
      <View style={styles.imageB}>
     <Image source={{
              width:250,
              height:370,
              padding: 50,
              alignItems: 'center',
              uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1454864389l/28954056.jpg"}}/>


      </View>


          <Text style={styles.detailstitle}>
                  Book Name : Crushing It         

                  {'\n'}{'\n'}Author :  Joanne Levy

                  {'\n'}{'\n'}About This Book : {'\n'}Kat is already so over seventh grade. It doesn’t help that her best friend and cousin, Olivia, grew a foot over the summer and won a spot on the school’s dance team, shooting her up on the popularity scale. In the jungle that is middle school, Olivia is a gazelle. Braces-wearing, manga-loving, uncoordinated Kat is a warthog.


                  {'\n'}{'\n'}Language: English

                  {'\n'}{'\n'}Price : Rs. 800.00
          </Text>
  </View>


      <Card.Content>
                <TouchableOpacity style={styles.detailstBtn} onPress={() => navigation.navigate('Cart')}>
                              <Text> Add to Cart </Text>
                </TouchableOpacity>

      </Card.Content>
      </Card>
</ScrollView>
)
}

function Besharam ({ navigation }) {
return (
      <ScrollView style={styles.scrollViewB}>
      <Card style={styles.card}>
      <View style={styles.container}>
      <View style={styles.imageB}>
     <Image source={{
              width:250,
              height:370,
              padding: 50,
              alignItems: 'center',
              uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1636615606l/58784487.jpg"}}/>
      </View>


          <Text style={styles.detailstitle}>
                  Book Name : Beauty and the Besharam          

                  {'\n'}{'\n'}Author :  Lillie Vale

                  {'\n'}{'\n'}About This Book : {'\n'}“If you're a fan of rivals-to-lovers, look no further!”—Aiden Thomas, New York Times bestselling author of Cemetery Boys Heated competition leads to even hotter romance in this YA summer rom-com ...


                  {'\n'}{'\n'}Language: English

                  {'\n'}{'\n'}Price : Rs. 800.00
          </Text>
  </View>


      <Card.Content>
                <TouchableOpacity style={styles.detailstBtn} onPress={() => navigation.navigate('Cart')}>
                              <Text> Add to Cart </Text>
                </TouchableOpacity>

      </Card.Content>
      </Card>
</ScrollView>
)
}
//Romance Books Categories end

//Cart Function start
function Cart ({ navigation }) {
return (
          <ScrollView style={styles.scrollViewC}>
          <View style={styles.container}>
          <View style={styles.imageC}>
          <Image source={{
                width: 200,
                height: 180,
                padding: 50,
                alignItems: 'center',
                uri: 'https://www.pngmart.com/files/1/Blushing-Emoji-PNG-File.png'
                }}/>
        </View>

        <Card.Content>

        <Text style={styles.titleC}>Your Book Payment Added Succecfully</Text>

        <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Dashboard')}>
        <Text> Go To Dashboard</Text>
        </TouchableOpacity>

        </Card.Content>
        </View>
        </ScrollView>
        )
        }
//Cart Function end

//MyProfile function start
function MyProfile ({ navigation }) {
return (
      <ScrollView style={styles.scrollViewB}>
      <Card style={styles.card}>
      <View style={styles.container}>
      <View style={styles.imageB}>
      <Image source={{
              width:250,
              height:370,
              padding: 50,
              alignItems: 'center',
              uri: "https://scontent.fcmb2-2.fna.fbcdn.net/v/t1.6435-9/202211755_1148686875633811_4257446415335831268_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=X2JYcVaTzUIAX_e01NX&_nc_ht=scontent.fcmb2-2.fna&oh=00_AT_UGda10VddY7JQ_O38ywcS7JllLRma6qcd3aJ6d50mWg&oe=62B5BA65"
            }}/>
      </View>


          <Text style={styles.detailstitle}>
                  Name : Y. Ditharshan

                  {'\n'}{'\n'}S_Number :  s92075508

                  
                  {'\n'}{'\n'}Subject: EEI3269 - Introduction to Mobile Application Development

                  {'\n'}{'\n'}Class : EEI3269-WE-OL-G2
          </Text>
  </View>


      <Card.Content>
                <TouchableOpacity style={styles.detailstBtn} onPress={() => navigation.navigate('Dashboard')}>
                              <Text> Go to Dashboard </Text>
                </TouchableOpacity>

      </Card.Content>
      </Card>
</ScrollView>
)
}
//MyProfile function end








const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Welcome">
        <Drawer.Screen name="Welcome" options={{headerShown: false,}} component={Welcome} />
        <Drawer.Screen name="Login" options={{headerShown: false,}} component={Login} />
        <Drawer.Screen name="Register" options={{headerShown: false,}} component={Register} />
        <Drawer.Screen name="Dashboard" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Dashboard} />
        <Drawer.Screen name="Categories" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Categories} />
        <Drawer.Screen name="Adventure" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Adventure} />
        <Drawer.Screen name="Lightning" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Lightning} />
        <Drawer.Screen name="Hatchet" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Hatchet} />
        <Drawer.Screen name="Treasure" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Treasure} />
        <Drawer.Screen name="Classic" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Classic} />
        <Drawer.Screen name="Wonderful" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Wonderful} />
        <Drawer.Screen name="Hobbit" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Hobbit} />
        <Drawer.Screen name="Peter" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Peter} />
        <Drawer.Screen name="Comic" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Comic} />
        <Drawer.Screen name="Iron" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Iron} />
        <Drawer.Screen name="Spider" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Spider} />
        <Drawer.Screen name="HULK" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={HULK} />
        <Drawer.Screen name="Fantasy" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Fantasy} />
        <Drawer.Screen name="Harry" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Harry} />
        <Drawer.Screen name="Monsters" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Monsters} />
        <Drawer.Screen name="Redwall" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Redwall} />
        <Drawer.Screen name="Mystery" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Mystery} />
        <Drawer.Screen name="Artemis" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Artemis} />
        <Drawer.Screen name="Secret" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Secret} />
        <Drawer.Screen name="Lawyer" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Lawyer} />
        <Drawer.Screen name="Romance" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Romance} />
        <Drawer.Screen name="Cupid" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Cupid} />
        <Drawer.Screen name="Crushing" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Crushing} />
        <Drawer.Screen name="Cart" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={Cart} />
        <Drawer.Screen name="MyProfile" options={{ headerStyle:{backgroundColor: '#289b73'}}} component={MyProfile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



export default App;

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#05a76e',
  },

title1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#05a76e',
  },

inputView: {
    backgroundColor: "#67dcb3",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
 register_button: {
    height: 30,
    marginBottom: 30,
  },
 
loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#289b73",
  },
registerBtn:{
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#289b73",
  },
Welcome: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#289b73",
  },

dashboard: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#289b73",
  },
listBtn:{
    marginBottom: 10,
    width: 200,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "#0f8e61",
    marginLeft: 85,
},
catTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#05a76e',
  },
scrollView: {
      backgroundColor: DefaultTheme.colors.background,
      paddingTop: 10,
      paddingBottom:10
},

image:{
    alignItems: 'center',
    marginBottom:10,
    marginTop:5,
},

advBtn:{
    marginBottom: 10,
    width: 200,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "#61cea8",
    marginLeft: 25,
},

scrollViewB: {
      backgroundColor: '#8deccb',
      paddingTop: 10
      },

imageB:{
      alignItems: 'center',
      marginBottom:10,
      marginTop:5
      },

card: {
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor:'white'
      },

detailstitle:{
      fontSize:16,
      textAlign:'left',
      marginTop:10,
      color:'black',
      fontWeight:'bold',
      marginBottom:15
      },

detailstBtn:{
    marginBottom: 10,
    width: 200,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "#0f8e61",
    marginLeft: 45,
},
scrollViewC: {
      backgroundColor: DefaultTheme.colors.background,
      paddingTop: 10,
      paddingBottom:10
      },

cartButton: {
      marginBottom: 10,
    width: 200,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "#0f8e61",
    marginLeft: 60,
      },
imageC:{
      alignItems: 'center',
      marginBottom:10,
      marginTop:5
      },
titleC:{
      fontSize:20,
      textAlign:'center',
      marginTop:10,
      color:'grey',
      fontWeight:'bold',
      marginBottom:15
      },
});

