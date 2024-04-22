import { PageHeaderText, PageHeaderWrapper, PageContainer } from "./PageBuilder.styles";

interface PageBuilderProps {
    id: string;
    title?: string;
    children: React.ReactNode;
}

const PageBuilder: React.FC<PageBuilderProps> = ({
    id, 
    title, 
    children,
}) => {
    return (
        <PageContainer id={id}>
            {title &&
                <PageHeaderWrapper pb={3}>
                    <PageHeaderText>{title}</PageHeaderText>
                </PageHeaderWrapper>
            }
            {children}
        </PageContainer>
    );
};

export default PageBuilder;