export default function LabelValue(props: { label: string; value: string | number }) {
    const { label, value } = props;
    return (<div style={{ border: "1px solid rgb(0,200,0)", "text-align": "center" }} data-testid={`${label}-${value}`}>
      <div style={{ padding: "4px" }}>{value}</div>
      <div style={{ padding: "4px", "font-size": "small", background: "rgb(0,200,0)", color: "black" }}>{label}</div>
    </div>)
  }

  