
import Typography from '@material-ui/core/Typography';


export default function fieldRenderer({name, value}) {
    return (
      <div>
          <Typography variant="body2" gutterBottom>
                {props.name} : {props.value}
            </Typography>
      </div>
    );
}