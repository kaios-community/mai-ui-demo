import { add } from 'date-fns';
import { AppBar } from 'mai-ui/dist/components/appbar';
import {
  CheckboxRow,
  DatePicker,
  InlineSelect,
  Input,
  RangeRow,
  Select,
  ToggleRow,
} from 'mai-ui/dist/components/form';
import { View, ViewTab, ViewTabBar } from 'mai-ui/dist/components/view';
import { SelectablePriority } from 'mai-ui/dist/enums';
import { useListNav } from 'mai-ui/dist/hooks';
import { h } from 'preact';
import { route } from 'preact-router';
import { useState } from 'preact/hooks';
import { AppMenu } from '../components/AppMenu';
import Statusbar from '../components/Statusbar';

type Props = {
  tabId: 'checkbox' | 'list' | 'text' | 'tab4' | 'tab5';
};

function Forms({ tabId }: Props) {
  const [state, setState] = useState<any>({
    checkbox1: true,
    checkbox2: false,
    checkbox3: false,
    datepicker1: new Date().toISOString(),
    datepicker2: add(new Date(), { weeks: 10 }).toISOString(),
    inlineSelect1: 'opt1',
    inlineSelect2: 'opt1',
    inlineSelect3: 'opt1',
    select1: 'opt1',
    select2: 'opt1',
    select3: 'opt1',
    input1: 'input value',
    input2: 'input value',
    input3: 'input value',
    range1: 1,
    range2: 5,
    range3: 20,
    toggle1: true,
    toggle2: false,
    toggle3: false,
  });

  function setSetting(key: string, val: any): void {
    setState({
      ...state,
      [key]: val,
    });
  }

  const { selectedId } = useListNav({
    onSelect: (itemId) => console.log(`selected ${itemId}`),
  });

  return (
    <View>
      <Statusbar text="Forms" />
      <ViewTabBar
        tabs={[
          { id: 'checkbox', label: 'checkbox' },
          { id: 'datepicker', label: 'date picker' },
          { id: 'inlineSelect', label: 'inline select' },
          { id: 'select', label: 'select' },
          { id: 'input', label: 'input' },
          { id: 'range', label: 'range' },
          { id: 'toggle', label: 'toggle' },
        ]}
        selectedId={tabId}
        onChange={(tabId) => route(`/forms/${tabId}`, true)}
      />
      <ViewTab tabId="checkbox" activeTabId={tabId}>
        <CheckboxRow
          label="Checkbox 1"
          value={state.checkbox1}
          selectable={{
            priority: SelectablePriority.Low,
            id: 'checkbox1',
            selected: selectedId === 'checkbox1',
          }}
          onChange={(value) => setSetting('checkbox1', value)}
        />
        <CheckboxRow
          label="Checkbox 2"
          value={state.checkbox2}
          selectable={{
            priority: SelectablePriority.Low,
            id: 'checkbox2',
            selected: selectedId === 'checkbox2',
          }}
          onChange={(value) => setSetting('checkbox2', value)}
        />
        <CheckboxRow
          label="Checkbox 3"
          value={state.checkbox3}
          disabled={true}
          selectable={{
            priority: SelectablePriority.Low,
            id: 'checkbox3',
            selected: selectedId === 'checkbox3',
          }}
          onChange={(value) => setSetting('checkbox3', value)}
        />
      </ViewTab>
      <ViewTab tabId="datepicker" activeTabId={tabId}>
        <DatePicker
          label="Date Picker 1"
          value={state.datepicker1}
          selectable={{
            priority: SelectablePriority.Low,
            id: 'datepicker1',
            selected: selectedId === 'datepicker1',
          }}
          onChange={(value) => setSetting('datepicker1', value)}
        />
        <DatePicker
          label="Date Picker 2"
          value={state.datepicker2}
          selectable={{
            priority: SelectablePriority.Low,
            id: 'datepicker2',
            selected: selectedId === 'datepicker2',
          }}
          onChange={(value) => setSetting('datepicker2', value)}
        />
      </ViewTab>
      <ViewTab tabId="inlineSelect" activeTabId={tabId}>
        <InlineSelect
          label="Select 1"
          value={state.inlineSelect1}
          options={[
            { id: 'opt1', label: 'Option 1' },
            { id: 'opt2', label: 'Option 2' },
            { id: 'opt3', label: 'Option 3' },
          ]}
          selectable={{
            id: 'inlineSelect1',
            selected: selectedId === 'inlineSelect1',
          }}
          onChange={(value) => setSetting('inlineSelect1', value)}
        />
        <InlineSelect
          label="Select 2"
          value={state.inlineSelect2}
          options={[
            { id: 'opt1', label: 'Option 1' },
            { id: 'opt2', label: 'Option 2' },
            { id: 'opt3', label: 'Option 3' },
          ]}
          selectable={{
            id: 'inlineSelect2',
            selected: selectedId === 'inlineSelect2',
          }}
          onChange={(value) => setSetting('inlineSelect2', value)}
        />
        <InlineSelect
          label="Select 3"
          value={state.inlineSelect3}
          options={[
            { id: 'opt1', label: 'Option 1' },
            { id: 'opt2', label: 'Option 2' },
            { id: 'opt3', label: 'Option 3' },
          ]}
          selectable={{
            id: 'inlineSelect3',
            selected: selectedId === 'inlineSelect3',
          }}
          onChange={(value) => setSetting('inlineSelect3', value)}
        />
      </ViewTab>
      <ViewTab tabId="select" activeTabId={tabId}>
        <Select
          label="Select 1"
          value={state.select1}
          options={[
            { id: 'opt1', label: 'Option 1' },
            { id: 'opt2', label: 'Option 2' },
            { id: 'opt3', label: 'Option 3' },
          ]}
          selectable={{
            id: 'select1',
            selected: selectedId === 'select1',
          }}
          onChange={(value) => setSetting('select1', value)}
        />
        <Select
          label="Select 2"
          value={state.select2}
          options={[
            { id: 'opt1', label: 'Option 1' },
            { id: 'opt2', label: 'Option 2' },
            { id: 'opt3', label: 'Option 3' },
          ]}
          selectable={{
            id: 'select2',
            selected: selectedId === 'select2',
          }}
          onChange={(value) => setSetting('select2', value)}
        />
        <Select
          label="Select 3"
          value={state.select3}
          options={[
            { id: 'opt1', label: 'Option 1' },
            { id: 'opt2', label: 'Option 2' },
            { id: 'opt3', label: 'Option 3' },
          ]}
          selectable={{
            id: 'select3',
            selected: selectedId === 'select3',
          }}
          onChange={(value) => setSetting('select3', value)}
        />
      </ViewTab>
      <ViewTab tabId="input" activeTabId={tabId}>
        <Input
          label="Input1"
          value={state.input1}
          selectable={{
            id: 'input1',
            selected: selectedId === 'input1',
          }}
          onChange={(value) => setSetting('input1', value)}
        />
        <Input
          label="Input2"
          value={state.input2}
          selectable={{
            id: 'input2',
            selected: selectedId === 'input2',
          }}
          onChange={(value) => setSetting('input2', value)}
        />
        <Input
          label="Input3"
          value={state.input3}
          selectable={{
            id: 'input3',
            selected: selectedId === 'input3',
          }}
          onChange={(value) => setSetting('input3', value)}
        />
      </ViewTab>
      <ViewTab tabId="range" activeTabId={tabId}>
        <RangeRow
          label="Range 1"
          value={state.range1}
          min={1}
          max={25}
          increment={1}
          selectable={{
            id: 'range1',
            selected: selectedId === 'range1',
          }}
          onChange={(value) => setSetting('range1', value)}
        />
        <RangeRow
          label="Range 2"
          value={state.range2}
          min={1}
          max={25}
          increment={1}
          selectable={{
            id: 'range2',
            selected: selectedId === 'range2',
          }}
          onChange={(value) => setSetting('range2', value)}
        />
        <RangeRow
          label="Range 3"
          value={state.range3}
          min={1}
          max={25}
          increment={1}
          selectable={{
            id: 'range3',
            selected: selectedId === 'range3',
          }}
          onChange={(value) => setSetting('range3', value)}
        />
      </ViewTab>
      <ViewTab tabId="toggle" activeTabId={tabId}>
        <ToggleRow
          label="Toggle 1"
          value={state.toggle1}
          selectable={{
            id: 'toggle1',
            selected: selectedId === 'toggle1',
          }}
          onChange={(value) => setSetting('toggle1', value)}
        />
        <ToggleRow
          label="Toggle 2"
          value={state.toggle2}
          selectable={{
            id: 'toggle2',
            selected: selectedId === 'toggle2',
          }}
          onChange={(value) => setSetting('toggle2', value)}
        />
        <ToggleRow
          label="Toggle 3"
          value={state.toggle3}
          disabled={true}
          selectable={{
            id: 'toggle3',
            selected: selectedId === 'toggle3',
          }}
          onChange={(value) => setSetting('toggle3', value)}
        />
      </ViewTab>
      <AppBar
        appMenuContent={<AppMenu />}
        actions={[
          {
            id: 'action1',
            label: 'Action 1',
            actionFn: () => console.log('selected action1'),
          },
          {
            id: 'action2',
            label: 'Action 2',
            actionFn: () => console.log('selected action2'),
          },
          {
            id: 'action3',
            label: 'Action 3',
            actionFn: () => console.log('selected action3'),
          },
        ]}
      />
    </View>
  );
}

export default Forms;
