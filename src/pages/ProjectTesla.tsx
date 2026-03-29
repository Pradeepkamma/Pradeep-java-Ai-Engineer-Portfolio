import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ProjectDetailLayout from "@/components/ProjectDetailLayout";

const ProjectTesla = () => (
  <PageTransition>
    <div className="min-h-screen">
      <Navbar />
      <ProjectDetailLayout
        title="Tesla Stock Price Prediction"
        description="Built a machine learning model to predict Tesla (TSLA) stock prices using historical market data, leveraging time-series analysis and deep learning techniques for accurate forecasting."
        tags={["Machine Learning", "Python", "LSTM", "Time Series", "Data Science"]}
        githubUrl="#"
        liveUrl="#"
        whatIBuilt={[
          "Collected and preprocessed Tesla historical stock data including open, close, high, low prices and volume.",
          "Implemented LSTM (Long Short-Term Memory) neural network for time-series price prediction.",
          "Built data visualization dashboards showing historical trends, moving averages, and predicted vs actual prices.",
          "Applied feature engineering with technical indicators like RSI, MACD, and Bollinger Bands.",
          "Trained and evaluated the model achieving strong prediction accuracy on test data.",
        ]}
        tools={[
          "Python",
          "TensorFlow / Keras",
          "Pandas",
          "NumPy",
          "Matplotlib",
          "Scikit-learn",
          "LSTM",
          "Jupyter Notebook",
        ]}
        outcomes={[
          "Achieved reliable short-term stock price predictions with low RMSE.",
          "Demonstrated understanding of time-series forecasting and deep learning architectures.",
          "Created clean, reproducible notebooks with clear documentation for each step.",
        ]}
      />
      <Footer />
    </div>
  </PageTransition>
);

export default ProjectTesla;
