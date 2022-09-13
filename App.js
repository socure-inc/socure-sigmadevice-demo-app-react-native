import * as React from 'react';

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Platform,
  SafeAreaView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Snackbar from 'react-native-snackbar';
import RnDeviceRisk from 'react-native-device-risk';

export default function App() {
  const [trackers, addTracker] = React.useState([]);
  const [isSending, setSendingData] = React.useState(false);

  const onInitialize = async () => {
    try {
      await RnDeviceRisk.setTracker(
        "Replace this with your SDK Key",
        trackers
      );
      Snackbar.show({
        text: 'Trackers Initialized',
        duration: Snackbar.LENGTH_LONG,
      });
    } catch (error) {
      Snackbar.show({
        text: 'Trackers initialization failed',
        duration: Snackbar.LENGTH_LONG,
      });
    }
  };

  const onSendData = async () => {
    try {
      setSendingData(true);
      const res = await RnDeviceRisk.sendDataWithContext("homepage");
      const { deviceRiskSessionId } = res;
      Alert.alert('Success', `Device Risk Sesison ID: ${deviceRiskSessionId}`);
    } catch (error) {
      Alert.alert('Failed', `${error}`);
    } finally {
      setSendingData(false);
    }
  };

  const onItemClick = (name) => {
    if (trackers.indexOf(name) > -1) {
      addTracker(trackers.filter((t) => t !== name));
    } else {
      addTracker([...trackers, name]);
    }
  };

  const buildItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.itemList}
        onPress={() => onItemClick(item)}
      >
        <CheckBox
          disabled={false}
          value={trackers.indexOf(item) > -1}
          onValueChange={() => onItemClick(item)}
        />
        <View style={styles.smallSpace} />
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Select the trackers to initialize Device Risk
      </Text>
      <View style={styles.list}>
        {(
          <FlatList
            data={Object.keys(RnDeviceRisk.getConstants())}
            renderItem={buildItem}
            keyExtractor={(item) => `${item}`}
          />
        )}
      </View>
      <View style={styles.divider} />
      <View style={styles.selection}>
        <Text>{trackers.join(', ')}</Text>
      </View>
      <View style={styles.actions}>
        {trackers.length > 0 && (
          <View style={styles.actionsContainer}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={onInitialize}
            >
              <Text style={styles.actionButtonLabel}>INITIALIZE</Text>
            </TouchableOpacity>
            <View style={styles.actionSpace} />
            <TouchableOpacity style={styles.actionButton} onPress={onSendData}>
              <Text style={styles.actionButtonLabel}>SEND DATA</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {isSending && (
        <View style={styles.sendingContainer}>
          <ActivityIndicator color="#000" size="large" />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 8,
  },
  smallSpace: {
    ...Platform.select({
      ios: {
        width: 16,
      },
      android: {},
    }),
  },
  title: {
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  list: {
    width: '100%',
    paddingHorizontal: 16,
    flex: 3,
  },
  selection: {
    flex: 1,
    paddingHorizontal: 16,
  },
  actions: {
    flex: 0.5,
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  actionButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#00838f',
  },
  sendingContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
  },
  actionSpace: {
    width: 24,
  },
  actionButtonLabel: {
    color: '#fff',
  },
  itemList: {
    flexDirection: 'row',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        paddingVertical: 2,
        paddingLeft: 4,
      },
      android: {},
    }),
  },
  divider: {
    height: 2,
    width: '100%',
    marginVertical: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
