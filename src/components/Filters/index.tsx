import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Filter } from '../../types';
import { FILTERS } from '../../constants';

interface FiltersProps {
  activeFilter: Filter;
  setActiveFilter: (filter: Filter) => void;
}

export const Filters = ({ activeFilter, setActiveFilter }: FiltersProps) => {
  return (
    <View style={styles.filtersBlock}>
      {FILTERS.map((filter) => {
        const selected = filter === activeFilter;

        return (
          <Pressable
            key={filter}
            onPress={() => setActiveFilter(filter)}
            style={({ pressed }) => [
              styles.filterButton,
              selected && styles.filterButtonSelected,
              pressed && !selected && styles.filterButtonPressed
            ]}>
            <Text style={[styles.buttonText, selected && styles.buttonTextSelected]}>{filter}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  filtersBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(120, 120, 128, 0.16)',
    borderRadius: 16,
    padding: 3,
    marginBottom: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255, 255, 255, 0.55)'
  },
  filterButton: {
    flex: 1,
    height: 36,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center'
  },
  filterButtonSelected: {
    backgroundColor: 'rgba(255, 255, 255, 0.94)',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255, 255, 255, 0.9)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.14,
    shadowRadius: 4,
    elevation: 3
  },
  filterButtonPressed: {
    backgroundColor: 'rgba(120, 120, 128, 0.1)'
  },
  buttonText: {
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: -0.08,
    color: '#636366',
    textTransform: 'capitalize'
  },
  buttonTextSelected: {
    color: '#1C1C1E',
    fontWeight: '600'
  }
});
