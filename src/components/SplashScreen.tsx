import { 
    Text, 
    View, 
    Linking, 
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { commonStyles } from '../styles/styles';

export default function SplashScreen() {
    const theme = useTheme();
    const styles = commonStyles(theme);

    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Blog Card</Text>
            <View style={styles.card}>
                <View>
                    <Text style={styles.sub_title}>
                        What's new in Javascript 21 - ES12
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.description}>
                    <Text>
                        Just like every year, Javascript brings in new features. This year
                        javascript is bringing 4 new features, which are almost in
                        production rollout. I won't be wasting much more time and directly
                        jump to code with easy to understand examples.
                    </Text>
                </View>
                <View style={styles.link_text}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
                        <Text style={styles.link_text}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://www.instagram.com/hiteshchoudharyofficial/')}>
                        <Text style={styles.link_text}>Follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}