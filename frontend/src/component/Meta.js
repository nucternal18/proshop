import { Helmet } from 'react-helmet';

const Meta = ({title, description, keywords}) => {
    return (
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keyword' content={keywords} />
      </Helmet>
    );
}

Meta.defaultProps = {  
    title: 'Welcome to Blooms Hair | Online Shop',
    description: 'We sell great hair care products',
    keywords: 'Hair Care, Shampoo, Conditioner, Nashi Hair Products'
}

export default Meta
