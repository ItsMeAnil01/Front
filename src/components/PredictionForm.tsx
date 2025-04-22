import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { predictHeartRisk } from '@/lib/api';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
  age: z.coerce.number().min(0, "Age must be at least 0").max(120, "Age must be less than 120"),
  sex: z.coerce.number().min(0).max(1, "Please select your biological sex"),
  cp: z.coerce.number().min(0).max(3, "Chest pain type must be between 0 and 3"),
  trestbps: z.coerce.number().min(0, "Resting BP must be at least 0").max(300, "Resting BP must be less than 300"),
  chol: z.coerce.number().min(0, "Cholesterol must be at least 0").max(600, "Cholesterol must be less than 600"),
  fbs: z.coerce.number().min(0).max(1, "Fasting blood sugar must be 0 or 1"),
  restecg: z.coerce.number().min(0).max(2, "Resting ECG must be between 0 and 2"),
  thalach: z.coerce.number().min(0, "Max heart rate must be at least 0").max(250, "Max heart rate must be less than 250"),
  exang: z.coerce.number().min(0).max(1, "Exercise angina must be 0 or 1"),
  oldpeak: z.coerce.number().min(0).max(10, "ST depression must be between 0 and 10"),
  slope: z.coerce.number().min(0).max(2, "Slope must be between 0 and 2"),
  ca: z.coerce.number().min(0).max(4, "Number of vessels must be between 0 and 4"),
  thal: z.coerce.number().min(0).max(3, "Thalassemia must be between 0 and 3"),
});

type UserHealthData = z.infer<typeof formSchema>;

const PredictionForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const form = useForm<UserHealthData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: 45,
      sex: 1,
      cp: 0,
      trestbps: 120,
      chol: 200,
      fbs: 0,
      restecg: 0,
      thalach: 150,
      exang: 0,
      oldpeak: 0,
      slope: 0,
      ca: 0,
      thal: 0,
    },
  });

  const onSubmit = async (data: UserHealthData) => {
    setIsSubmitting(true);
    try {
      const response = await predictHeartRisk(data);
      sessionStorage.setItem('predictionResult', JSON.stringify(response));
      toast.success("Prediction completed successfully!");
      navigate('/results');
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast.error(error.message || "Failed to connect to the server. Please ensure the backend is running and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-center">Heart Disease Risk Assessment</CardTitle>
        <CardDescription className="text-center">
          Enter your health metrics below for an AI-powered risk prediction
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="45" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sex"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Biological Sex</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value.toString()}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select biological sex" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">Male</SelectItem>
                        <SelectItem value="0">Female</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Chest Pain Type</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value.toString()}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select chest pain type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0">Typical Angina</SelectItem>
                        <SelectItem value="1">Atypical Angina</SelectItem>
                        <SelectItem value="2">Non-anginal Pain</SelectItem>
                        <SelectItem value="3">Asymptomatic</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="trestbps"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Resting Blood Pressure (mm Hg)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="120" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="chol"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Serum Cholesterol (mg/dl)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="200" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fbs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fasting Blood Sugar {">"}120 mg/dl</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value.toString()}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0">No</SelectItem>
                        <SelectItem value="1">Yes</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="restecg"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Resting ECG Results</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value.toString()}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select result" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0">Normal</SelectItem>
                        <SelectItem value="1">ST-T Wave Abnormality</SelectItem>
                        <SelectItem value="2">Left Ventricular Hypertrophy</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="thalach"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maximum Heart Rate</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="150" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="exang"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Exercise Induced Angina</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value.toString()}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0">No</SelectItem>
                        <SelectItem value="1">Yes</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="oldpeak"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ST Depression Induced by Exercise</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.1" placeholder="0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slope"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slope of Peak Exercise ST Segment</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value.toString()}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0">Upsloping</SelectItem>
                        <SelectItem value="1">Flat</SelectItem>
                        <SelectItem value="2">Downsloping</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ca"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Major Vessels</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value.toString()}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select count" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0">0</SelectItem>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="thal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Thalassemia</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value.toString()}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select value" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0">Normal</SelectItem>
                        <SelectItem value="1">Fixed Defect</SelectItem>
                        <SelectItem value="2">Reversible Defect</SelectItem>
                        <SelectItem value="3">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <CardFooter className="flex justify-center pt-6 px-0">
              <Button
                type="submit"
                className="w-full md:w-auto px-8 bg-medical-600 hover:bg-medical-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Calculate Risk Score"}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PredictionForm;